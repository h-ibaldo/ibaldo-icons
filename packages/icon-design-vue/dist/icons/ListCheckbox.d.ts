import type { DefineComponent } from 'vue';

export interface ListCheckboxProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ListCheckbox: DefineComponent<ListCheckboxProps>;

export default ListCheckbox;
export { ListCheckbox };
