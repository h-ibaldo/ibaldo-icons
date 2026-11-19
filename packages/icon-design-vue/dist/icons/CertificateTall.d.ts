import type { DefineComponent } from 'vue';

export interface CertificateTallProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CertificateTall: DefineComponent<CertificateTallProps>;

export default CertificateTall;
export { CertificateTall };
