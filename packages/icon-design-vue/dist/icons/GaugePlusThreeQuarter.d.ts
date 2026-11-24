import type { DefineComponent } from 'vue';

export interface GaugePlusThreeQuarterProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const GaugePlusThreeQuarter: DefineComponent<GaugePlusThreeQuarterProps>;

export default GaugePlusThreeQuarter;
export { GaugePlusThreeQuarter };
