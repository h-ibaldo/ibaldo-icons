import { SvelteComponent } from 'svelte';

export interface CheckboxSquareSelect1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CheckboxSquareSelect1 extends SvelteComponent<CheckboxSquareSelect1Props> {}
