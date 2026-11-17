import { SvelteComponent } from 'svelte';

export interface AtSign2PlusProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AtSign2Plus extends SvelteComponent<AtSign2PlusProps> {}
