import { SvelteComponent } from 'svelte';

export interface Cloud1PrinterProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Cloud1Printer extends SvelteComponent<Cloud1PrinterProps> {}
