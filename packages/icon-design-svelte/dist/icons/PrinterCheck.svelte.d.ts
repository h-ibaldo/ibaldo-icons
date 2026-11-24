import { SvelteComponent } from 'svelte';

export interface PrinterCheckProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PrinterCheck extends SvelteComponent<PrinterCheckProps> {}
