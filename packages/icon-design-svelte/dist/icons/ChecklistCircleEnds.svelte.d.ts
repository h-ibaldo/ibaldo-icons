import { SvelteComponent } from 'svelte';

export interface ChecklistCircleEndsProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChecklistCircleEnds extends SvelteComponent<ChecklistCircleEndsProps> {}
