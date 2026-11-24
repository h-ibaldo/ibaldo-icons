import { SvelteComponent } from 'svelte';

export interface ChecklistSquareTopTwoProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChecklistSquareTopTwo extends SvelteComponent<ChecklistSquareTopTwoProps> {}
