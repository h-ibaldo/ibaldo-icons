import { SvelteComponent } from 'svelte';

export interface FormDropdownExpandedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FormDropdownExpanded extends SvelteComponent<FormDropdownExpandedProps> {}
