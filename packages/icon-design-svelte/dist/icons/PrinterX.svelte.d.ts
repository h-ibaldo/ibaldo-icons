import { SvelteComponent } from 'svelte';

export interface PrinterXProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PrinterX extends SvelteComponent<PrinterXProps> {}
