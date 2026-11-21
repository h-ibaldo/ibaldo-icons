import { SvelteComponent } from 'svelte';

export interface TicketSlashProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TicketSlash extends SvelteComponent<TicketSlashProps> {}
