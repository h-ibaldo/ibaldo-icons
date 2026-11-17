import { SvelteComponent } from 'svelte';

export interface CheckboxCircle4Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CheckboxCircle4 extends SvelteComponent<CheckboxCircle4Props> {}
