import { SvelteComponent } from 'svelte';

export interface TicketXProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TicketX extends SvelteComponent<TicketXProps> {}
