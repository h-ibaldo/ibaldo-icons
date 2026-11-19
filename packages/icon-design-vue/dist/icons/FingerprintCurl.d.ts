import type { DefineComponent } from 'vue';

export interface FingerprintCurlProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FingerprintCurl: DefineComponent<FingerprintCurlProps>;

export default FingerprintCurl;
export { FingerprintCurl };
