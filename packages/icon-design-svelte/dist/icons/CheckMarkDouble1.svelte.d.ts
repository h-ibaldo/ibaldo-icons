import { SvelteComponent } from 'svelte';

export interface CheckMarkDouble1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CheckMarkDouble1 extends SvelteComponent<CheckMarkDouble1Props> {}
