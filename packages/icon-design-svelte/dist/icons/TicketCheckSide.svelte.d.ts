import { SvelteComponent } from 'svelte';

export interface TicketCheckSideProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TicketCheckSide extends SvelteComponent<TicketCheckSideProps> {}
