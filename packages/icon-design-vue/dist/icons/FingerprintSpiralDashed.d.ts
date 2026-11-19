import type { DefineComponent } from 'vue';

export interface FingerprintSpiralDashedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FingerprintSpiralDashed: DefineComponent<FingerprintSpiralDashedProps>;

export default FingerprintSpiralDashed;
export { FingerprintSpiralDashed };
