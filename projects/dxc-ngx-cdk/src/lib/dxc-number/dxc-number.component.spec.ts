import { DxcNumberComponent } from "./dxc-number.component";

import { render, fireEvent, screen } from "@testing-library/angular";
import { DxcNewInputTextModule } from "../dxc-new-input-text/dxc-new-input-text.module";

describe("DxcInputNumberComponent", () => {
  test("should render dxc-number", async () => {
    await render(DxcNumberComponent, {
      componentProperties: {
        label: "test-input",
        helperText: "helper-text",
      },
      imports: [DxcNewInputTextModule],
    });

    expect(screen.queryByText("test-input")).toBeInTheDocument();
    expect(screen.queryByText("helper-text")).toBeInTheDocument();
  });

  test("should render error dxc-number", async () => {
    await render(DxcNumberComponent, {
      componentProperties: {
        label: "test-input",
        helperText: "helper-text",
        error: "important error",
      },
      imports: [DxcNewInputTextModule],
    });

    expect(screen.queryByText("test-input")).toBeInTheDocument();
    expect(screen.queryByText("helper-text")).toBeInTheDocument();
    expect(screen.queryByText("important error")).toBeInTheDocument();
  });

  test("should call onChange", async () => {
    const onChange = jest.fn();
    await render(DxcNumberComponent, {
      componentProperties: {
        label: "test-input",
        helperText: "helper-text",
        min: 10,
        max: 100,
        step: 5,
        onChange: {
          emit: onChange,
        } as any,
      },
      imports: [DxcNewInputTextModule],
    });

    const btn = screen.getAllByRole("button");

    expect(screen.queryByText("test-input")).toBeInTheDocument();
    fireEvent.click(btn[1]);
    expect(onChange).toHaveBeenCalledWith(10);
    fireEvent.click(btn[1]);
    expect(onChange).toHaveBeenCalledWith(15);
    fireEvent.click(btn[0]);
    expect(onChange).toHaveBeenCalledWith(10);
  });

  test("controlled input", async () => {
    const onChange = jest.fn();
    await render(DxcNumberComponent, {
      componentProperties: {
        label: "test-input",
        helperText: "helper-text",
        value: 4,
        min: 1,
        max: 100,
        step: 5,
        onChange: {
          emit: onChange,
        } as any,
      },
      imports: [DxcNewInputTextModule],
    });

    const input = <HTMLInputElement>screen.getByRole("textbox");

    expect(screen.queryByText("test-input")).toBeInTheDocument();
    input.focus();
    expect(input).toHaveFocus();
    expect(input.step).toBe("5");
    expect(input.min).toBe("1");
    expect(input.max).toBe("100");
    expect(screen.getByDisplayValue("4")).toBeTruthy();
    fireEvent.input(input, { target: { value: "10" } });
    expect(onChange).toHaveBeenCalledWith("10");
    expect(screen.getByDisplayValue("4")).toBeTruthy();
  });

  test("should call onBlur", async () => {
    const onChange = jest.fn();
    const onBlur = jest.fn();
    await render(DxcNumberComponent, {
      componentProperties: {
        label: "test-input",
        helperText: "helper-text",
        value: 4,
        min: 1,
        max: 100,
        step: 5,
        onChange: {
          emit: onChange,
        } as any,
        onBlur: {
          emit: onBlur,
        } as any,
      },
      imports: [DxcNewInputTextModule],
    });

    const input = <HTMLInputElement>screen.getByRole("textbox");

    expect(screen.queryByText("test-input")).toBeInTheDocument();
    input.focus();
    expect(input).toHaveFocus();
    expect(input.step).toBe("5");
    expect(input.min).toBe("1");
    expect(input.max).toBe("100");
    expect(screen.getByDisplayValue("4"));
    fireEvent.input(input, { target: { value: "10" } });
    expect(onChange).toHaveBeenCalledWith("10");
    expect(screen.getByDisplayValue("4"));
    fireEvent.blur(input);
    expect(onBlur).toHaveBeenCalledWith({ error: undefined, value: "4" });
  });
});
