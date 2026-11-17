import { SvelteComponent } from 'svelte';

export interface Heart1AddProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Heart1Add extends SvelteComponent<Heart1AddProps> {}
