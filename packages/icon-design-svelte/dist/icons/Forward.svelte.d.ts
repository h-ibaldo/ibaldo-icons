import { SvelteComponent } from 'svelte';

export interface ForwardProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Forward extends SvelteComponent<ForwardProps> {}
