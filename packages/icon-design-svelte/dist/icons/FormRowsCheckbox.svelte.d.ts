import { SvelteComponent } from 'svelte';

export interface FormRowsCheckboxProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FormRowsCheckbox extends SvelteComponent<FormRowsCheckboxProps> {}
