import { SvelteComponent } from 'svelte';

export interface FormInputCursorTallProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FormInputCursorTall extends SvelteComponent<FormInputCursorTallProps> {}
