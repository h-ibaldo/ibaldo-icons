import type { DefineComponent } from 'vue';

export interface FingerprintDashedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FingerprintDashed: DefineComponent<FingerprintDashedProps>;

export default FingerprintDashed;
export { FingerprintDashed };
