import paginate from "@/utils/paginate";

describe("utils/paginate", () => {
  it("When valid params should success invocation", () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8];
    const expected = [3, 4];
    const result = paginate(array, 2, 2);

    expect(result).toStrictEqual(expected);
  });
  it("when array is empty return empty", () => {
    const array: number[] = [];
    const expected: number[] = [];
    const result = paginate(array, 2, 2);

    expect(result).toStrictEqual(expected);
  });
});
