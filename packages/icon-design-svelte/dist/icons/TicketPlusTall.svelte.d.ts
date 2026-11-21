import { SvelteComponent } from 'svelte';

export interface TicketPlusTallProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TicketPlusTall extends SvelteComponent<TicketPlusTallProps> {}
