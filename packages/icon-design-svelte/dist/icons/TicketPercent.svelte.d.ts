import { SvelteComponent } from 'svelte';

export interface TicketPercentProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TicketPercent extends SvelteComponent<TicketPercentProps> {}
