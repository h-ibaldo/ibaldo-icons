import type { DefineComponent } from 'vue';

export interface WindowPlayProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WindowPlay: DefineComponent<WindowPlayProps>;

export default WindowPlay;
export { WindowPlay };
