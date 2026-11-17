import { SvelteComponent } from 'svelte';

export interface HandTapDoubleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class HandTapDouble extends SvelteComponent<HandTapDoubleProps> {}
