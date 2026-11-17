import { SvelteComponent } from 'svelte';

export interface Heart2StripedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Heart2Striped extends SvelteComponent<Heart2StripedProps> {}
