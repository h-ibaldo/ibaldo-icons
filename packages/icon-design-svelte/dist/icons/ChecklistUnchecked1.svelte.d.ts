import { SvelteComponent } from 'svelte';

export interface ChecklistUnchecked1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChecklistUnchecked1 extends SvelteComponent<ChecklistUnchecked1Props> {}
