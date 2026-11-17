import { SvelteComponent } from 'svelte';

export interface AtSign1PlusProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AtSign1Plus extends SvelteComponent<AtSign1PlusProps> {}
