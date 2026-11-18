import { SvelteComponent } from 'svelte';

export interface CertificateTallProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CertificateTall extends SvelteComponent<CertificateTallProps> {}
