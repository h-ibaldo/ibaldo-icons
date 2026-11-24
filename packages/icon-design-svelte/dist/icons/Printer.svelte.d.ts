import { SvelteComponent } from 'svelte';

export interface PrinterProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Printer extends SvelteComponent<PrinterProps> {}
