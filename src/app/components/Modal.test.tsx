import { render, screen, fireEvent, queryByText } from "@testing-library/react";
import Modal from "./Modal";

describe("Modal test", () => {
  test("test open", () => {
    render(
      <Modal isOpen={true} onClose={jest.fn()}>
        <p>ok</p>
      </Modal>
    );
    expect(screen.getByText("ok")).toBeInTheDocument();
  });

  test("test does not render close", () => {
    const { queryByText } = render(
      <Modal isOpen={false} onClose={jest.fn()}>
        <p>oknha</p>
      </Modal>
    );
    expect(queryByText("oknha")).not.toBeInTheDocument();
  });

  test("calls onClose when close button is clicked", () => {
    const onCloseMock = jest.fn();
    render(
      <Modal isOpen={true} onClose={onCloseMock}>
        <p>duoccualo</p>
      </Modal>
    );

    const closeButton = screen.getByRole("button", { name: /close/i });
    fireEvent.click(closeButton);

    expect(onCloseMock).toHaveBeenCalledTimes(1);
  });
});
