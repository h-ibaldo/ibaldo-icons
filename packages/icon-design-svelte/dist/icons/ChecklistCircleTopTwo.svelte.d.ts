import { SvelteComponent } from 'svelte';

export interface ChecklistCircleTopTwoProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChecklistCircleTopTwo extends SvelteComponent<ChecklistCircleTopTwoProps> {}
