import { SvelteComponent } from 'svelte';

export interface TicketSlashTallProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TicketSlashTall extends SvelteComponent<TicketSlashTallProps> {}
