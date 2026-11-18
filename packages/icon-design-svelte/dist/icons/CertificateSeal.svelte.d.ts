import { SvelteComponent } from 'svelte';

export interface CertificateSealProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CertificateSeal extends SvelteComponent<CertificateSealProps> {}
