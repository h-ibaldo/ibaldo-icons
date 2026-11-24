import { SvelteComponent } from 'svelte';

export interface PollHorizontalCheckboxProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PollHorizontalCheckbox extends SvelteComponent<PollHorizontalCheckboxProps> {}
