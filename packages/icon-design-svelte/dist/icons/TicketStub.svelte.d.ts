import { SvelteComponent } from 'svelte';

export interface TicketStubProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TicketStub extends SvelteComponent<TicketStubProps> {}
