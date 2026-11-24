import { SvelteComponent } from 'svelte';

export interface FormCheckboxCheckLargeProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FormCheckboxCheckLarge extends SvelteComponent<FormCheckboxCheckLargeProps> {}
