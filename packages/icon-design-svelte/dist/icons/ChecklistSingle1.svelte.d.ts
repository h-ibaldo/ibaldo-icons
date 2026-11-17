import { SvelteComponent } from 'svelte';

export interface ChecklistSingle1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChecklistSingle1 extends SvelteComponent<ChecklistSingle1Props> {}
