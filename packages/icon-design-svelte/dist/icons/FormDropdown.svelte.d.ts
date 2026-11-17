import { SvelteComponent } from 'svelte';

export interface FormDropdownProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FormDropdown extends SvelteComponent<FormDropdownProps> {}
