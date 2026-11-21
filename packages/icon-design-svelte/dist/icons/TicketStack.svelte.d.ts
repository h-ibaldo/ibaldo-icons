import { SvelteComponent } from 'svelte';

export interface TicketStackProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TicketStack extends SvelteComponent<TicketStackProps> {}
