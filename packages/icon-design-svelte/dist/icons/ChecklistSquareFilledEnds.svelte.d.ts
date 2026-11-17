import { SvelteComponent } from 'svelte';

export interface ChecklistSquareFilledEndsProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChecklistSquareFilledEnds extends SvelteComponent<ChecklistSquareFilledEndsProps> {}
