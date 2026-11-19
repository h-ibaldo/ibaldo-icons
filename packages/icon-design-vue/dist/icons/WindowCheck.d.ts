import type { DefineComponent } from 'vue';

export interface WindowCheckProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WindowCheck: DefineComponent<WindowCheckProps>;

export default WindowCheck;
export { WindowCheck };
