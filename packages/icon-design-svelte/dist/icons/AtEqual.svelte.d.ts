import { SvelteComponent } from 'svelte';

export interface AtEqualProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AtEqual extends SvelteComponent<AtEqualProps> {}
