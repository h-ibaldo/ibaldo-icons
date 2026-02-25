import { SvelteComponent } from 'svelte';

export interface AgendaContacts10Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AgendaContacts10 extends SvelteComponent<AgendaContacts10Props> {}
