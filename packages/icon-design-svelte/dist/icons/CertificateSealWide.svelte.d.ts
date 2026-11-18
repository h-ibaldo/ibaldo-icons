import { SvelteComponent } from 'svelte';

export interface CertificateSealWideProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CertificateSealWide extends SvelteComponent<CertificateSealWideProps> {}
