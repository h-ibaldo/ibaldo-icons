import type { DefineComponent } from 'vue';

export interface WindowKeyHorizontalProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WindowKeyHorizontal: DefineComponent<WindowKeyHorizontalProps>;

export default WindowKeyHorizontal;
export { WindowKeyHorizontal };
