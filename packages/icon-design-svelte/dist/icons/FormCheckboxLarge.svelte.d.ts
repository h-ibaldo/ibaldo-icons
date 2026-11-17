import { SvelteComponent } from 'svelte';

export interface FormCheckboxLargeProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FormCheckboxLarge extends SvelteComponent<FormCheckboxLargeProps> {}
