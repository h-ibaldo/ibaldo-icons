import { SvelteComponent } from 'svelte';

export interface CheckboxSquare3Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CheckboxSquare3 extends SvelteComponent<CheckboxSquare3Props> {}
