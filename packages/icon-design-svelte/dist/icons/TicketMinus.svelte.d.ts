import { SvelteComponent } from 'svelte';

export interface TicketMinusProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TicketMinus extends SvelteComponent<TicketMinusProps> {}
