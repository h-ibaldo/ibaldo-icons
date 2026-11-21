import { SvelteComponent } from 'svelte';

export interface TicketCheckTallProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TicketCheckTall extends SvelteComponent<TicketCheckTallProps> {}
