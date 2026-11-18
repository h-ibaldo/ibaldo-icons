import { SvelteComponent } from 'svelte';

export interface WwwProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Www extends SvelteComponent<WwwProps> {}
