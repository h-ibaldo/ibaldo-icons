import type { DefineComponent } from 'vue';

export interface ListChevronLeftProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ListChevronLeft: DefineComponent<ListChevronLeftProps>;

export default ListChevronLeft;
export { ListChevronLeft };
