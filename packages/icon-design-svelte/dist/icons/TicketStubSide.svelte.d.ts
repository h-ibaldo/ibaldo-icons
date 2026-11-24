import { SvelteComponent } from 'svelte';

export interface TicketStubSideProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TicketStubSide extends SvelteComponent<TicketStubSideProps> {}
