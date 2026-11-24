import { SvelteComponent } from 'svelte';

export interface ChecklistRadioAllProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChecklistRadioAll extends SvelteComponent<ChecklistRadioAllProps> {}
