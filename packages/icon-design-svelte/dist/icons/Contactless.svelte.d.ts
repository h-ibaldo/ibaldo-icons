import { SvelteComponent } from 'svelte';

export interface ContactlessProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Contactless extends SvelteComponent<ContactlessProps> {}
