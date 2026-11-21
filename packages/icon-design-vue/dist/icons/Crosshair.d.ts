import type { DefineComponent } from 'vue';

export interface CrosshairProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Crosshair: DefineComponent<CrosshairProps>;

export default Crosshair;
export { Crosshair };
