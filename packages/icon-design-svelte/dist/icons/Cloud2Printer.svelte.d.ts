import { SvelteComponent } from 'svelte';

export interface Cloud2PrinterProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Cloud2Printer extends SvelteComponent<Cloud2PrinterProps> {}
