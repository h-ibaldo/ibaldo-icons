import { SvelteComponent } from 'svelte';

export interface ChecklistCircleBottomProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChecklistCircleBottom extends SvelteComponent<ChecklistCircleBottomProps> {}
