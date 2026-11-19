import type { DefineComponent } from 'vue';

export interface PopoverWindowPlainProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PopoverWindowPlain: DefineComponent<PopoverWindowPlainProps>;

export default PopoverWindowPlain;
export { PopoverWindowPlain };
