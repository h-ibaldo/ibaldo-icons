import type { DefineComponent } from 'vue';

export interface PopoverListProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PopoverList: DefineComponent<PopoverListProps>;

export default PopoverList;
export { PopoverList };
