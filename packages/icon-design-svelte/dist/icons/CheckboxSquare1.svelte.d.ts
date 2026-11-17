import { SvelteComponent } from 'svelte';

export interface CheckboxSquare1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CheckboxSquare1 extends SvelteComponent<CheckboxSquare1Props> {}
