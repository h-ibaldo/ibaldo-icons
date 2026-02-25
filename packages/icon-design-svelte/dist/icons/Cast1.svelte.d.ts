import { SvelteComponent } from 'svelte';

export interface Cast1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Cast1 extends SvelteComponent<Cast1Props> {}
