import { SvelteComponent } from 'svelte';

export interface ChecklistSingle4Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChecklistSingle4 extends SvelteComponent<ChecklistSingle4Props> {}
