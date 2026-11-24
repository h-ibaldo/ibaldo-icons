import { SvelteComponent } from 'svelte';

export interface TicketStackSlimProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TicketStackSlim extends SvelteComponent<TicketStackSlimProps> {}
