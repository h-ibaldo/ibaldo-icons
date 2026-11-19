import type { DefineComponent } from 'vue';

export interface PopoverUpBigProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PopoverUpBig: DefineComponent<PopoverUpBigProps>;

export default PopoverUpBig;
export { PopoverUpBig };
