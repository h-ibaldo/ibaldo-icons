import type { DefineComponent } from 'vue';

export interface FingerprintWideProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FingerprintWide: DefineComponent<FingerprintWideProps>;

export default FingerprintWide;
export { FingerprintWide };
