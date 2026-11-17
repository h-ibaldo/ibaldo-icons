import { SvelteComponent } from 'svelte';

export interface AtBoxyProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AtBoxy extends SvelteComponent<AtBoxyProps> {}
