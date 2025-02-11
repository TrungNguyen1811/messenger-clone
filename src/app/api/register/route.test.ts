 // Import API Route
import prisma from "@/app/libs/prismadb";
import { POST } from "../auth/[...nextauth]/route";

describe("User Registration API", () => {
  beforeAll(async () => {
    await prisma.$connect(); // Kết nối database trước khi test
  });

  afterAll(async () => {
    await prisma.user.deleteMany(); // Xóa dữ liệu sau test
    await prisma.$disconnect();
  });

  it("should return 400 if missing email, name, or password", async () => {
    const response = await POST(new Request("http://localhost/api/auth/register", {
      method: "POST",
      body: JSON.stringify({ email: "test@example.com", password: "12345678" }),
      headers: { "Content-Type": "application/json" },
    }));

    expect(response.status).toBe(400);
    expect(await response.text()).toBe("Missing info");
  });

  it("should register a user and return the user object", async () => {
    const response = await POST(new Request("http://localhost/api/auth/register", {
      method: "POST",
      body: JSON.stringify({ email: "test@example.com", name: "Test User", password: "12345678" }),
      headers: { "Content-Type": "application/json" },
    }));

    expect(response.status).toBe(200);
    const data = await response.json();
    expect(data).toHaveProperty("email", "test@example.com");
    expect(data).toHaveProperty("name", "Test User");
  });

  it("should return 500 if an internal error occurs", async () => {
    jest.spyOn(prisma.user, "create").mockRejectedValue(new Error("DB Error"));

    const response = await POST(new Request("http://localhost/api/auth/register", {
      method: "POST",
      body: JSON.stringify({ email: "error@example.com", name: "Error User", password: "12345678" }),
      headers: { "Content-Type": "application/json" },
    }));

    expect(response.status).toBe(500);
    expect(await response.text()).toBe("Internal Error");

    jest.restoreAllMocks();
  });
});
