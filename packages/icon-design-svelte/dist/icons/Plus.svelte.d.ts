import { SvelteComponent } from 'svelte';

export interface PlusProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Plus extends SvelteComponent<PlusProps> {}
