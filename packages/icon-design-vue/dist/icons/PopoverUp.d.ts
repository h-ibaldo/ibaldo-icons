import type { DefineComponent } from 'vue';

export interface PopoverUpProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PopoverUp: DefineComponent<PopoverUpProps>;

export default PopoverUp;
export { PopoverUp };
