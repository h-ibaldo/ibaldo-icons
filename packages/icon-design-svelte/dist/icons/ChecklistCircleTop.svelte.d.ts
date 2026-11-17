import { SvelteComponent } from 'svelte';

export interface ChecklistCircleTopProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChecklistCircleTop extends SvelteComponent<ChecklistCircleTopProps> {}
