import { SvelteComponent } from 'svelte';

export interface TicketStubDashedSideProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TicketStubDashedSide extends SvelteComponent<TicketStubDashedSideProps> {}
