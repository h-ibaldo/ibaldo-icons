import { SvelteComponent } from 'svelte';

export interface TicketMinusSideProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TicketMinusSide extends SvelteComponent<TicketMinusSideProps> {}
