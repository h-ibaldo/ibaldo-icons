import { SvelteComponent } from 'svelte';

export interface FormCheckboxProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FormCheckbox extends SvelteComponent<FormCheckboxProps> {}
