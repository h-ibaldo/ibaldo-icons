import { SvelteComponent } from 'svelte';

export interface ChecklistProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Checklist extends SvelteComponent<ChecklistProps> {}
