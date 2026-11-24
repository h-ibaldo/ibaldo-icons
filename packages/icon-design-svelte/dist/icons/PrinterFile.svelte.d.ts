import { SvelteComponent } from 'svelte';

export interface PrinterFileProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PrinterFile extends SvelteComponent<PrinterFileProps> {}
