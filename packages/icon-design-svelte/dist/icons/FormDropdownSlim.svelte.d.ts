import { SvelteComponent } from 'svelte';

export interface FormDropdownSlimProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FormDropdownSlim extends SvelteComponent<FormDropdownSlimProps> {}
