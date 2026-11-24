import { SvelteComponent } from 'svelte';

export interface FormCheckboxLongProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FormCheckboxLong extends SvelteComponent<FormCheckboxLongProps> {}
