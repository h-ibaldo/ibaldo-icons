import type { DefineComponent } from 'vue';

export interface WindowKeyDotProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WindowKeyDot: DefineComponent<WindowKeyDotProps>;

export default WindowKeyDot;
export { WindowKeyDot };
