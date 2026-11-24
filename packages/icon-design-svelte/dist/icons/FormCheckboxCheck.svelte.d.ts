import { SvelteComponent } from 'svelte';

export interface FormCheckboxCheckProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FormCheckboxCheck extends SvelteComponent<FormCheckboxCheckProps> {}
