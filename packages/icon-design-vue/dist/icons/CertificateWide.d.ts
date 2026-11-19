import type { DefineComponent } from 'vue';

export interface CertificateWideProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CertificateWide: DefineComponent<CertificateWideProps>;

export default CertificateWide;
export { CertificateWide };
