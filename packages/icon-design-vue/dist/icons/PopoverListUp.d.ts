import type { DefineComponent } from 'vue';

export interface PopoverListUpProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PopoverListUp: DefineComponent<PopoverListUpProps>;

export default PopoverListUp;
export { PopoverListUp };
