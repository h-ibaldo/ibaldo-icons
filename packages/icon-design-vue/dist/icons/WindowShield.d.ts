import type { DefineComponent } from 'vue';

export interface WindowShieldProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WindowShield: DefineComponent<WindowShieldProps>;

export default WindowShield;
export { WindowShield };
