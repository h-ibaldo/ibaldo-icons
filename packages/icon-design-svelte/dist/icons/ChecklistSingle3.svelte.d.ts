import { SvelteComponent } from 'svelte';

export interface ChecklistSingle3Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChecklistSingle3 extends SvelteComponent<ChecklistSingle3Props> {}
