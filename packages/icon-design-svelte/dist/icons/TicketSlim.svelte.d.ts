import { SvelteComponent } from 'svelte';

export interface TicketSlimProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TicketSlim extends SvelteComponent<TicketSlimProps> {}
