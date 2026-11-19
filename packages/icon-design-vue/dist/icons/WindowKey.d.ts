import type { DefineComponent } from 'vue';

export interface WindowKeyProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WindowKey: DefineComponent<WindowKeyProps>;

export default WindowKey;
export { WindowKey };
