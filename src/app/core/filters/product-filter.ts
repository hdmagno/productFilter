import { BaseFilter } from "./base-filter";

export interface ProductFilter extends BaseFilter {
  title: string,
  price: number
}
