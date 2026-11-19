import type { DefineComponent } from 'vue';

export interface GaugeLongTicksProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const GaugeLongTicks: DefineComponent<GaugeLongTicksProps>;

export default GaugeLongTicks;
export { GaugeLongTicks };
