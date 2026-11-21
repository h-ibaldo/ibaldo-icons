import { SvelteComponent } from 'svelte';

export interface TicketCheckFoldedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TicketCheckFolded extends SvelteComponent<TicketCheckFoldedProps> {}
