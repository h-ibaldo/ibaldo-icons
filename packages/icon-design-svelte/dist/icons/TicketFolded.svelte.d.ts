import { SvelteComponent } from 'svelte';

export interface TicketFoldedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TicketFolded extends SvelteComponent<TicketFoldedProps> {}
