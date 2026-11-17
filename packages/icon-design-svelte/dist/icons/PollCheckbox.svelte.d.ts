import { SvelteComponent } from 'svelte';

export interface PollCheckboxProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PollCheckbox extends SvelteComponent<PollCheckboxProps> {}
