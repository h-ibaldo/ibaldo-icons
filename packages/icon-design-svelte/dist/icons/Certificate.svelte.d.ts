import { SvelteComponent } from 'svelte';

export interface CertificateProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Certificate extends SvelteComponent<CertificateProps> {}
