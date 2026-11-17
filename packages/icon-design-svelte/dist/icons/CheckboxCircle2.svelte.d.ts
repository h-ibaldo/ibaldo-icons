import { SvelteComponent } from 'svelte';

export interface CheckboxCircle2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CheckboxCircle2 extends SvelteComponent<CheckboxCircle2Props> {}
