import type { DefineComponent } from 'vue';

export interface PopoverWindowProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PopoverWindow: DefineComponent<PopoverWindowProps>;

export default PopoverWindow;
export { PopoverWindow };
