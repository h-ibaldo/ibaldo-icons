import { SvelteComponent } from 'svelte';

export interface CheckMark12Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CheckMark12 extends SvelteComponent<CheckMark12Props> {}
