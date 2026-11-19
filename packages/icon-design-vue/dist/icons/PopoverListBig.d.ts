import type { DefineComponent } from 'vue';

export interface PopoverListBigProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PopoverListBig: DefineComponent<PopoverListBigProps>;

export default PopoverListBig;
export { PopoverListBig };
