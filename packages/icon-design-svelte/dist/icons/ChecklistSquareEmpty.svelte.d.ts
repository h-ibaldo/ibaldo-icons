import { SvelteComponent } from 'svelte';

export interface ChecklistSquareEmptyProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChecklistSquareEmpty extends SvelteComponent<ChecklistSquareEmptyProps> {}
