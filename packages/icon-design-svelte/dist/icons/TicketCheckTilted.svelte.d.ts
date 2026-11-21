import { SvelteComponent } from 'svelte';

export interface TicketCheckTiltedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TicketCheckTilted extends SvelteComponent<TicketCheckTiltedProps> {}
