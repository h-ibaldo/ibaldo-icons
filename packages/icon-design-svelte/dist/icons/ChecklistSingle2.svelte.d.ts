import { SvelteComponent } from 'svelte';

export interface ChecklistSingle2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChecklistSingle2 extends SvelteComponent<ChecklistSingle2Props> {}
