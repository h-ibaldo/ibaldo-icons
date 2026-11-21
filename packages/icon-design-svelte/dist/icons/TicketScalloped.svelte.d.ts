import { SvelteComponent } from 'svelte';

export interface TicketScallopedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TicketScalloped extends SvelteComponent<TicketScallopedProps> {}
