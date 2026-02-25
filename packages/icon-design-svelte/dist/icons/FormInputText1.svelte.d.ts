import { SvelteComponent } from 'svelte';

export interface FormInputText1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FormInputText1 extends SvelteComponent<FormInputText1Props> {}
