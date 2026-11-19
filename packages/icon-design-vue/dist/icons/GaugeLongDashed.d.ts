import type { DefineComponent } from 'vue';

export interface GaugeLongDashedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const GaugeLongDashed: DefineComponent<GaugeLongDashedProps>;

export default GaugeLongDashed;
export { GaugeLongDashed };
