import { SvelteComponent } from 'svelte';

export interface TicketPlusProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TicketPlus extends SvelteComponent<TicketPlusProps> {}
