import type { DefineComponent } from 'vue';

export interface FingerprintCurlStemProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FingerprintCurlStem: DefineComponent<FingerprintCurlStemProps>;

export default FingerprintCurlStem;
export { FingerprintCurlStem };
