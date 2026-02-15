import { SvelteComponent } from 'svelte';

export interface FormInputText2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FormInputText2 extends SvelteComponent<FormInputText2Props> {}
