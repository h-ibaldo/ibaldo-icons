import type { DefineComponent } from 'vue';

export interface CertificateSealWideProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CertificateSealWide: DefineComponent<CertificateSealWideProps>;

export default CertificateSealWide;
export { CertificateSealWide };
