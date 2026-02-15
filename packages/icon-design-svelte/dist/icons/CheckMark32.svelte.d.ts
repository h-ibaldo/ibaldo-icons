import { SvelteComponent } from 'svelte';

export interface CheckMark32Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CheckMark32 extends SvelteComponent<CheckMark32Props> {}
