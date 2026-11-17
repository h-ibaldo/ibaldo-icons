import { SvelteComponent } from 'svelte';

export interface CheckboxCircle1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CheckboxCircle1 extends SvelteComponent<CheckboxCircle1Props> {}
