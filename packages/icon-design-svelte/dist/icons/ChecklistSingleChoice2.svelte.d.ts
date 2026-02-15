import { SvelteComponent } from 'svelte';

export interface ChecklistSingleChoice2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChecklistSingleChoice2 extends SvelteComponent<ChecklistSingleChoice2Props> {}
