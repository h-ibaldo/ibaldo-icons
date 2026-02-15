import { SvelteComponent } from 'svelte';

export interface FormInputNumber2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FormInputNumber2 extends SvelteComponent<FormInputNumber2Props> {}
