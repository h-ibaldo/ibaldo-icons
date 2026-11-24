import type { DefineComponent } from 'vue';

export interface WindowAwardProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WindowAward: DefineComponent<WindowAwardProps>;

export default WindowAward;
export { WindowAward };
