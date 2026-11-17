import { SvelteComponent } from 'svelte';

export interface FormDropdownDotProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FormDropdownDot extends SvelteComponent<FormDropdownDotProps> {}
