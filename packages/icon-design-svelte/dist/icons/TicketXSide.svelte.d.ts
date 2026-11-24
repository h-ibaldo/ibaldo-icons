import { SvelteComponent } from 'svelte';

export interface TicketXSideProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TicketXSide extends SvelteComponent<TicketXSideProps> {}
