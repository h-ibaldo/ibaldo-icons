import { SvelteComponent } from 'svelte';

export interface FormRadioCheckSmallProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FormRadioCheckSmall extends SvelteComponent<FormRadioCheckSmallProps> {}
