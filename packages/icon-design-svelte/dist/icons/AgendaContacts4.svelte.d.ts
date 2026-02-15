import { SvelteComponent } from 'svelte';

export interface AgendaContacts4Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AgendaContacts4 extends SvelteComponent<AgendaContacts4Props> {}
