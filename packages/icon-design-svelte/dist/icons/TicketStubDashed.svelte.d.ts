import { SvelteComponent } from 'svelte';

export interface TicketStubDashedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TicketStubDashed extends SvelteComponent<TicketStubDashedProps> {}
