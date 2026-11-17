import { SvelteComponent } from 'svelte';

export interface CheckboxCircle5Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CheckboxCircle5 extends SvelteComponent<CheckboxCircle5Props> {}
