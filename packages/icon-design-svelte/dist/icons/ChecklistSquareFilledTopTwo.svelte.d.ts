import { SvelteComponent } from 'svelte';

export interface ChecklistSquareFilledTopTwoProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChecklistSquareFilledTopTwo extends SvelteComponent<ChecklistSquareFilledTopTwoProps> {}
