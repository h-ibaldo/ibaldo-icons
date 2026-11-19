import type { DefineComponent } from 'vue';

export interface CertificateProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Certificate: DefineComponent<CertificateProps>;

export default Certificate;
export { Certificate };
