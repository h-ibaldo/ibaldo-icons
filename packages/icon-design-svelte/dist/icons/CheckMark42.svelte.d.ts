import { SvelteComponent } from 'svelte';

export interface CheckMark42Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CheckMark42 extends SvelteComponent<CheckMark42Props> {}
