import { SvelteComponent } from 'svelte';

export interface Cloud3PrinterProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Cloud3Printer extends SvelteComponent<Cloud3PrinterProps> {}
