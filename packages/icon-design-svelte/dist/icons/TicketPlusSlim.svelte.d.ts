import { SvelteComponent } from 'svelte';

export interface TicketPlusSlimProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TicketPlusSlim extends SvelteComponent<TicketPlusSlimProps> {}
