import type { DefineComponent } from 'vue';

export interface PopoverProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Popover: DefineComponent<PopoverProps>;

export default Popover;
export { Popover };
