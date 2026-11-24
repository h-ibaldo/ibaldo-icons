import { SvelteComponent } from 'svelte';

export interface ChecklistSquareFilledTopProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChecklistSquareFilledTop extends SvelteComponent<ChecklistSquareFilledTopProps> {}
