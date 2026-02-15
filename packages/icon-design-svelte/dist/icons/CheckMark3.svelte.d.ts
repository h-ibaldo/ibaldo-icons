import { SvelteComponent } from 'svelte';

export interface CheckMark3Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CheckMark3 extends SvelteComponent<CheckMark3Props> {}
