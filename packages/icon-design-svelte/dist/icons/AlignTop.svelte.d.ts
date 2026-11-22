import { SvelteComponent } from 'svelte';

export interface AlignTopProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AlignTop extends SvelteComponent<AlignTopProps> {}
