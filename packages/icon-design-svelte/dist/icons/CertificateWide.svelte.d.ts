import { SvelteComponent } from 'svelte';

export interface CertificateWideProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CertificateWide extends SvelteComponent<CertificateWideProps> {}
