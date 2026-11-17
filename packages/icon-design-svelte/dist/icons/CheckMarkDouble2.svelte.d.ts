import { SvelteComponent } from 'svelte';

export interface CheckMarkDouble2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CheckMarkDouble2 extends SvelteComponent<CheckMarkDouble2Props> {}
