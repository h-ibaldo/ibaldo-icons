import { SvelteComponent } from 'svelte';

export interface CheckboxSquare4Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CheckboxSquare4 extends SvelteComponent<CheckboxSquare4Props> {}
