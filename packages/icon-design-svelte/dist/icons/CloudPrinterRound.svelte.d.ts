import { SvelteComponent } from 'svelte';

export interface CloudPrinterRoundProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CloudPrinterRound extends SvelteComponent<CloudPrinterRoundProps> {}
