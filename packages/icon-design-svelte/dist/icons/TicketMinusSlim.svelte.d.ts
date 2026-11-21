import { SvelteComponent } from 'svelte';

export interface TicketMinusSlimProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TicketMinusSlim extends SvelteComponent<TicketMinusSlimProps> {}
