import { SvelteComponent } from 'svelte';

export interface CheckboxCircle3Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CheckboxCircle3 extends SvelteComponent<CheckboxCircle3Props> {}
