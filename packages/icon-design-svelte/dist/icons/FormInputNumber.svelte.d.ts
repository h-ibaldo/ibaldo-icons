import { SvelteComponent } from 'svelte';

export interface FormInputNumberProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FormInputNumber extends SvelteComponent<FormInputNumberProps> {}
