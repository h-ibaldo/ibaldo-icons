import type { DefineComponent } from 'vue';

export interface CrownBandProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CrownBand: DefineComponent<CrownBandProps>;

export default CrownBand;
export { CrownBand };
