import { SvelteComponent } from 'svelte';

export interface HandThumbDownProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class HandThumbDown extends SvelteComponent<HandThumbDownProps> {}
