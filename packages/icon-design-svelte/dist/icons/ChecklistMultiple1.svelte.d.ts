import { SvelteComponent } from 'svelte';

export interface ChecklistMultiple1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChecklistMultiple1 extends SvelteComponent<ChecklistMultiple1Props> {}
