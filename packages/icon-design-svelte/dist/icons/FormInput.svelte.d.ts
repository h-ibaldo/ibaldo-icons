import { SvelteComponent } from 'svelte';

export interface FormInputProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FormInput extends SvelteComponent<FormInputProps> {}
