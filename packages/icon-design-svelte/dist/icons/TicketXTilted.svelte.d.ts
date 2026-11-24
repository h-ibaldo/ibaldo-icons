import { SvelteComponent } from 'svelte';

export interface TicketXTiltedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TicketXTilted extends SvelteComponent<TicketXTiltedProps> {}
