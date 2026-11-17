import { SvelteComponent } from 'svelte';

export interface BoxPlainProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BoxPlain extends SvelteComponent<BoxPlainProps> {}
