import { SvelteComponent } from 'svelte';

export interface ChecklistMultiple3Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChecklistMultiple3 extends SvelteComponent<ChecklistMultiple3Props> {}
