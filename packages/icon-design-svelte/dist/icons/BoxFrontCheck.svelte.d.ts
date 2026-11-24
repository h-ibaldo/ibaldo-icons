import { SvelteComponent } from 'svelte';

export interface BoxFrontCheckProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BoxFrontCheck extends SvelteComponent<BoxFrontCheckProps> {}
