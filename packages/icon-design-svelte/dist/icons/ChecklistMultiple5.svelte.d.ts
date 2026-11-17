import { SvelteComponent } from 'svelte';

export interface ChecklistMultiple5Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChecklistMultiple5 extends SvelteComponent<ChecklistMultiple5Props> {}
