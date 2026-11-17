import { SvelteComponent } from 'svelte';

export interface AtDotsBoxyProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AtDotsBoxy extends SvelteComponent<AtDotsBoxyProps> {}
