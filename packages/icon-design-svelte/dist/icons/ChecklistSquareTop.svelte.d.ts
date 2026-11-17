import { SvelteComponent } from 'svelte';

export interface ChecklistSquareTopProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChecklistSquareTop extends SvelteComponent<ChecklistSquareTopProps> {}
