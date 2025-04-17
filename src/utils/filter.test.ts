import { describe, it, expect } from "vitest";
import { createRandSupplier } from "@/utils/fakerData";
import { filterByColumn } from "@/utils/filter";

describe("Filter search on list of data", () => {
  const supplierList = Array.from({ length: 30 }, () =>
    createRandSupplier(true),
  );
  it("should return all coincidences starts 'Axi' on name field", () => {
    const coincidences = filterByColumn(supplierList, {
      column: "name",
      keyword: "axi",
    });
    const expectedList = supplierList.filter((item) =>
      item.name.startsWith("Axi"),
    );
    expect(coincidences.length).toBe(expectedList.length);
    expect(coincidences).toEqual(expectedList);
  });
  it("should return all coincidences when 'ony' word is located in any index string location, using name field", () => {
    const coincidences = filterByColumn(supplierList, {
      column: "name",
      keyword: "ony",
    });

    const searchReg = new RegExp("ony", "i");
    const expectedList = supplierList.filter((item) =>
      searchReg.test(item.name),
    );
    console.log(expectedList);
    expect(coincidences.length).toBe(expectedList.length);
    expect(coincidences).toEqual(expectedList);
  });
});
