import { render, screen } from "@testing-library/react";
import { Checklist } from "./Checklist";
import { IdValue } from "./types";
import userEvent from "@testing-library/user-event";

test("should render correct list items when data specified", () => {
  render(
    <Checklist
      data={[{ id: 1, name: "Lucy", role: "Manager" }]}
      id="id"
      primary="name"
      secondary="role"
    />,
  );

  expect(screen.getByText("Lucy")).toBeInTheDocument();
});

test("should render correct manager list items when data specified", () => {
  render(
    <Checklist
      data={[{ id: 1, name: "Lucy", role: "Manager" }]}
      id="id"
      primary="name"
      secondary="role"
    />,
  );

  expect(screen.getByText("Manager")).toBeInTheDocument();
});

test("should render correct list items when renderItem specified", () => {
  render(
    <Checklist
      data={[{ id: 1, name: "Lucy", role: "Manager" }]}
      id="id"
      primary="name"
      secondary="role"
      renderItem={(item) => (
        <li key={item.id}>
          {item.name}-{item.role}
        </li>
      )}
    />,
  );

  expect(screen.getByText("Lucy-Manager")).toBeInTheDocument();
});

test("should render correct checked items when data specified", () => {
  render(
    <Checklist
      data={[{ id: 1, name: "Lucy", role: "Manager" }]}
      id="id"
      primary="name"
      secondary="role"
      checkedIds={[1]}
    />,
  );

  expect(screen.getByTestId("Checklist__input__1")).toBeChecked();
});

test("should check items when clicked", async () => {
  const user = userEvent.setup();
  render(
    <Checklist
      data={[{ id: 1, name: "Lucy", role: "Manager" }]}
      id="id"
      primary="name"
      secondary="role"
    />,
  );
  const lucyCheckBox = screen.getByTestId("Checklist__input__1");
  expect(lucyCheckBox).not.toBeChecked();
  await user.click(lucyCheckBox);
  expect(lucyCheckBox).toBeChecked();
});

test("should call onCheckedIdsChange when clicked", async () => {
  const user = userEvent.setup();
  let calledWith: IdValue[] | undefined = undefined;
  render(
    <Checklist
      data={[{ id: 1, name: "Lucy", role: "Manager" }]}
      id="id"
      primary="name"
      secondary="role"
      onCheckedIdsChange={(checkedIds) => (calledWith = checkedIds)}
    />,
  );
  await user.click(screen.getByTestId("Checklist__input__1"));
  expect(calledWith).toStrictEqual([1]);
});

test("should check and uncheck items when clicked", async () => {
  const user = userEvent.setup();
  render(
    <Checklist
      data={[{ id: 1, name: "Lucy", role: "Manager" }]}
      id="id"
      primary="name"
      secondary="role"
    />,
  );
  const lucyCheckBox = screen.getByTestId("Checklist__input__1");
  expect(lucyCheckBox).not.toBeChecked();
  await user.click(lucyCheckBox);
  expect(lucyCheckBox).toBeChecked();
  await user.click(lucyCheckBox);
  expect(lucyCheckBox).not.toBeChecked();
});
