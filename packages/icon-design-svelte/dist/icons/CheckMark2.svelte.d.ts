import { SvelteComponent } from 'svelte';

export interface CheckMark2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CheckMark2 extends SvelteComponent<CheckMark2Props> {}
