import type { DefineComponent } from 'vue';

export interface WindowXProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WindowX: DefineComponent<WindowXProps>;

export default WindowX;
export { WindowX };
