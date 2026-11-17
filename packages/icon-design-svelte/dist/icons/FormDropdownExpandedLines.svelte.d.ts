import { SvelteComponent } from 'svelte';

export interface FormDropdownExpandedLinesProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FormDropdownExpandedLines extends SvelteComponent<FormDropdownExpandedLinesProps> {}
