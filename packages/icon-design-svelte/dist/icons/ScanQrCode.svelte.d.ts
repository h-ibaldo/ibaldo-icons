import { SvelteComponent } from 'svelte';

export interface ScanQrCodeProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ScanQrCode extends SvelteComponent<ScanQrCodeProps> {}
