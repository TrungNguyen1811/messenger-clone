import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import prisma from "@/app/libs/prismadb";
// function sum(a: number, b: number) {
//   return a + b;
// }

// test("adds 2 + 3 should be equal to 5", () => {
//   expect(sum(2, 5)).toBe(5);
// });

// test("object assignment", () => {
//   const data: any = { one: 1 };
//   data["two"] = 2;
//   expect(data).not.toEqual({ one: 1, two: 2 });
// });

// test("adding positive numbers í not zero", () => {
//   for (let a = -1; a < 10; a++) {
//     for (let b = 1; b < 10; b++) {
//       expect(a + b).not.toBe(0);
//     }
//   }
// });

// test('null', () => {
//   const n = null;
//   expect(n).toBeNull();
//   expect(n).toBeDefined();
//   expect(n).not.toBeUndefined();
//   expect(n).not.toBeTruthy();
//   expect(n).toBeFalsy();
// });

// test('zero', () => {
//   const z = 0;
//   expect(z).not.toBeNull();
//   expect(z).toBeDefined();
//   expect(z).not.toBeUndefined();
//   expect(z).not.toBeTruthy();
//   expect(z).toBeFalsy();
// });

// test("two plus two", () => {
//   const value = 2 + 2;
//   expect(value).toBeGreaterThan(3);
//   expect(value).toBeGreaterThanOrEqual(3.5);
//   expect(value).toBeLessThan(5);
//   expect(value).toBeLessThanOrEqual(4.5);

//   // toBe and toEqual are equivalent for numbers
//   expect(value).toBe(4);
//   expect(value).toEqual(4);
// });

// test("adding floating point numbers", () => {
//   const value = 0.1 + 0.2;
//   expect(value).toBeCloseTo(0.3);
// });

// test('there is no I in team', () => {
//   expect('team').not.toMatch(/I/);
// });

// test('but there is a "stop" in Christoph', () => {
//   expect('Christoph').toMatch(/stop/);
// });

// const shoppingList = ["dia", "sia", "milk"];

// test("the shopping list has mink    on it", () => {
//   expect(shoppingList).toContain("milk");
//   // Set use to eliminate duplication
//   expect(new Set(shoppingList)).toContain("milk");
// });

// function compileAndroidCode() {
//   throw new Error("you are using the wrong JDK!");
// }

// test("compiling android goes as expected", () => {
//   expect(() => compileAndroidCode()).toThrow();
//   expect(() => compileAndroidCode()).toThrow(Error);

//   // You can also use a string that must be contained in the error message or a regexp
//   expect(() => compileAndroidCode()).toThrow("you are using the wrong JDK");
//   expect(() => compileAndroidCode()).toThrow(/JDK/);

//   // Or you can match an exact error message using a regexp like below
//   expect(() => compileAndroidCode()).toThrow(/^you are using the wrong JDK$/); // Test fails
//   expect(() => compileAndroidCode()).toThrow(/^you are using the wrong JDK!$/); // Test pass
// });
