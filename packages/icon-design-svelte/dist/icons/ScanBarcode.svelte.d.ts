import { SvelteComponent } from 'svelte';

export interface ScanBarcodeProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ScanBarcode extends SvelteComponent<ScanBarcodeProps> {}
