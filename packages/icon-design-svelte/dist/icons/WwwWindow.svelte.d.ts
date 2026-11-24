import { SvelteComponent } from 'svelte';

export interface WwwWindowProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WwwWindow extends SvelteComponent<WwwWindowProps> {}
