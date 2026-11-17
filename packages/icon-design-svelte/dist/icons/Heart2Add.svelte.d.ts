import { SvelteComponent } from 'svelte';

export interface Heart2AddProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Heart2Add extends SvelteComponent<Heart2AddProps> {}
