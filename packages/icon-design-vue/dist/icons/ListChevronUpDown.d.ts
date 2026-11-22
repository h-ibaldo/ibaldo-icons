import type { DefineComponent } from 'vue';

export interface ListChevronUpDownProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ListChevronUpDown: DefineComponent<ListChevronUpDownProps>;

export default ListChevronUpDown;
export { ListChevronUpDown };
