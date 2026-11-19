import type { DefineComponent } from 'vue';

export interface WindowMinusCirclePlainProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WindowMinusCirclePlain: DefineComponent<WindowMinusCirclePlainProps>;

export default WindowMinusCirclePlain;
export { WindowMinusCirclePlain };
