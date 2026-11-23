import { SvelteComponent } from 'svelte';

export interface TicketVerticalProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TicketVertical extends SvelteComponent<TicketVerticalProps> {}
