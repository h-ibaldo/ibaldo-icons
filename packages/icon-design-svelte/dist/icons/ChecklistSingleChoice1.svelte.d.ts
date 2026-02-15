import { SvelteComponent } from 'svelte';

export interface ChecklistSingleChoice1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChecklistSingleChoice1 extends SvelteComponent<ChecklistSingleChoice1Props> {}
