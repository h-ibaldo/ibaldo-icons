import type { DefineComponent } from 'vue';

export interface FingerprintProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Fingerprint: DefineComponent<FingerprintProps>;

export default Fingerprint;
export { Fingerprint };
