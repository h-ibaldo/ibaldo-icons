import { SvelteComponent } from 'svelte';

export interface CheckboxCheckedSquare2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CheckboxCheckedSquare2 extends SvelteComponent<CheckboxCheckedSquare2Props> {}
