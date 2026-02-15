import { SvelteComponent } from 'svelte';

export interface CheckboxSquareSelect2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CheckboxSquareSelect2 extends SvelteComponent<CheckboxSquareSelect2Props> {}
