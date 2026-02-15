import { SvelteComponent } from 'svelte';

export interface CheckMark1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CheckMark1 extends SvelteComponent<CheckMark1Props> {}
