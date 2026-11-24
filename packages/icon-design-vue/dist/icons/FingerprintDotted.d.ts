import type { DefineComponent } from 'vue';

export interface FingerprintDottedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FingerprintDotted: DefineComponent<FingerprintDottedProps>;

export default FingerprintDotted;
export { FingerprintDotted };
