import { SvelteComponent } from 'svelte';

export interface TicketMinusTallProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TicketMinusTall extends SvelteComponent<TicketMinusTallProps> {}
