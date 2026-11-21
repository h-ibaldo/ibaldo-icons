import { SvelteComponent } from 'svelte';

export interface TicketSlashSlimProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TicketSlashSlim extends SvelteComponent<TicketSlashSlimProps> {}
