import { SvelteComponent } from 'svelte';

export interface TicketXSlimProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TicketXSlim extends SvelteComponent<TicketXSlimProps> {}
