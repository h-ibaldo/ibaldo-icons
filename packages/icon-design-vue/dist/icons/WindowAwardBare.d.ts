import type { DefineComponent } from 'vue';

export interface WindowAwardBareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WindowAwardBare: DefineComponent<WindowAwardBareProps>;

export default WindowAwardBare;
export { WindowAwardBare };
