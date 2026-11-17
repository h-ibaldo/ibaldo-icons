import { SvelteComponent } from 'svelte';

export interface ChecklistSquareFilledAllProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChecklistSquareFilledAll extends SvelteComponent<ChecklistSquareFilledAllProps> {}
