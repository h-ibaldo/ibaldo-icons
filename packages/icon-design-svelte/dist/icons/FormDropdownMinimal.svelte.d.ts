import { SvelteComponent } from 'svelte';

export interface FormDropdownMinimalProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FormDropdownMinimal extends SvelteComponent<FormDropdownMinimalProps> {}
