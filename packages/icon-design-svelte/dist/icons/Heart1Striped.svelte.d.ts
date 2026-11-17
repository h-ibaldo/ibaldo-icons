import { SvelteComponent } from 'svelte';

export interface Heart1StripedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Heart1Striped extends SvelteComponent<Heart1StripedProps> {}
