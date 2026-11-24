import type { DefineComponent } from 'vue';

export interface FingerprintSpiralProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FingerprintSpiral: DefineComponent<FingerprintSpiralProps>;

export default FingerprintSpiral;
export { FingerprintSpiral };
