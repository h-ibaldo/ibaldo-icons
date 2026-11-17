import { SvelteComponent } from 'svelte';

export interface ChecklistSquareBottomProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChecklistSquareBottom extends SvelteComponent<ChecklistSquareBottomProps> {}
