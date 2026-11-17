import { SvelteComponent } from 'svelte';

export interface SkipXProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SkipX extends SvelteComponent<SkipXProps> {}
