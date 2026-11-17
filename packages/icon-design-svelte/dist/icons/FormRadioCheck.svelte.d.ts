import { SvelteComponent } from 'svelte';

export interface FormRadioCheckProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FormRadioCheck extends SvelteComponent<FormRadioCheckProps> {}
