import { SvelteComponent } from 'svelte';

export interface TicketPercentTallProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TicketPercentTall extends SvelteComponent<TicketPercentTallProps> {}
