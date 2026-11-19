import type { DefineComponent } from 'vue';

export interface WindowStackStripedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WindowStackStriped: DefineComponent<WindowStackStripedProps>;

export default WindowStackStriped;
export { WindowStackStriped };
