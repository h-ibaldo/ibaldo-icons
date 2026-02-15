import { SvelteComponent } from 'svelte';

export interface FormDropdownSelect1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FormDropdownSelect1 extends SvelteComponent<FormDropdownSelect1Props> {}
