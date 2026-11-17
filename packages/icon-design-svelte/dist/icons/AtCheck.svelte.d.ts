import { SvelteComponent } from 'svelte';

export interface AtCheckProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AtCheck extends SvelteComponent<AtCheckProps> {}
