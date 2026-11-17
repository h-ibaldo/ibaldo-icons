import { SvelteComponent } from 'svelte';

export interface CheckboxSquare2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CheckboxSquare2 extends SvelteComponent<CheckboxSquare2Props> {}
