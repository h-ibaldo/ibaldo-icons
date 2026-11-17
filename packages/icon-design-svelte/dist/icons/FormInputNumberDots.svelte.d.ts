import { SvelteComponent } from 'svelte';

export interface FormInputNumberDotsProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FormInputNumberDots extends SvelteComponent<FormInputNumberDotsProps> {}
