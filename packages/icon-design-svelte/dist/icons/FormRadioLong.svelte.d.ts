import { SvelteComponent } from 'svelte';

export interface FormRadioLongProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FormRadioLong extends SvelteComponent<FormRadioLongProps> {}
