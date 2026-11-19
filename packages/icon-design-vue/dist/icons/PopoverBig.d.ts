import type { DefineComponent } from 'vue';

export interface PopoverBigProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PopoverBig: DefineComponent<PopoverBigProps>;

export default PopoverBig;
export { PopoverBig };
