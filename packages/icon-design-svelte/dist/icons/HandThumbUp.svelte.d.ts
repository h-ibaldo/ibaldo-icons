import { SvelteComponent } from 'svelte';

export interface HandThumbUpProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class HandThumbUp extends SvelteComponent<HandThumbUpProps> {}
