import { SvelteComponent } from 'svelte';

export interface ChecklistMultipleChoices1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChecklistMultipleChoices1 extends SvelteComponent<ChecklistMultipleChoices1Props> {}
