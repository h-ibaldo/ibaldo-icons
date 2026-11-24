import type { DefineComponent } from 'vue';

export interface CertificateSealProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CertificateSeal: DefineComponent<CertificateSealProps>;

export default CertificateSeal;
export { CertificateSeal };
