import { SvelteComponent } from 'svelte';

export interface AgendaContacts2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AgendaContacts2 extends SvelteComponent<AgendaContacts2Props> {}
