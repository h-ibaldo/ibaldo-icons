import type { DefineComponent } from 'vue';

export interface WindowPlusCenterProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WindowPlusCenter: DefineComponent<WindowPlusCenterProps>;

export default WindowPlusCenter;
export { WindowPlusCenter };
