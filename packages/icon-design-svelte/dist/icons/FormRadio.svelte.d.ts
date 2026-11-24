import { SvelteComponent } from 'svelte';

export interface FormRadioProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FormRadio extends SvelteComponent<FormRadioProps> {}
