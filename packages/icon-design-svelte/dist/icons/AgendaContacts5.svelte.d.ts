import { SvelteComponent } from 'svelte';

export interface AgendaContacts5Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AgendaContacts5 extends SvelteComponent<AgendaContacts5Props> {}
