import { SvelteComponent } from 'svelte';

export interface QrCodeProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class QrCode extends SvelteComponent<QrCodeProps> {}
