import { Dollar } from "../dollar";

test("곱셈 테스트", () => {
  const dollar = new Dollar(5);

  dollar.times(2);

  expect(dollar.amount).toBe(10);
});
