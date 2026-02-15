import { SvelteComponent } from 'svelte';

export interface FormDropdownSelect2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FormDropdownSelect2 extends SvelteComponent<FormDropdownSelect2Props> {}
