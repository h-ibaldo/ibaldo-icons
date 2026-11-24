import { SvelteComponent } from 'svelte';

export interface TicketPercentSlimProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TicketPercentSlim extends SvelteComponent<TicketPercentSlimProps> {}
