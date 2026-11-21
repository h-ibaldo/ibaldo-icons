import { SvelteComponent } from 'svelte';

export interface TicketSlashSideProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TicketSlashSide extends SvelteComponent<TicketSlashSideProps> {}
