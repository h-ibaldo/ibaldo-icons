import { SvelteComponent } from 'svelte';

export interface Connect1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Connect1 extends SvelteComponent<Connect1Props> {}
