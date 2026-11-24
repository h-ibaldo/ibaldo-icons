import { SvelteComponent } from 'svelte';

export interface ChecklistCircleEmptyProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChecklistCircleEmpty extends SvelteComponent<ChecklistCircleEmptyProps> {}
