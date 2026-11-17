import { SvelteComponent } from 'svelte';

export interface CheckDouble2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CheckDouble2 extends SvelteComponent<CheckDouble2Props> {}
