import { SvelteComponent } from 'svelte';

export interface ChecklistRadioTopProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChecklistRadioTop extends SvelteComponent<ChecklistRadioTopProps> {}
