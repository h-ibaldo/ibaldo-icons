import { SvelteComponent } from 'svelte';

export interface ChecklistMultiple2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChecklistMultiple2 extends SvelteComponent<ChecklistMultiple2Props> {}
