import { SvelteComponent } from 'svelte';

export interface Connect2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Connect2 extends SvelteComponent<Connect2Props> {}
