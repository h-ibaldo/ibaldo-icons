import { SvelteComponent } from 'svelte';

export interface ChecklistSquareEndsProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChecklistSquareEnds extends SvelteComponent<ChecklistSquareEndsProps> {}
