import { SvelteComponent } from 'svelte';

export interface ChecklistMultipleChoices3Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChecklistMultipleChoices3 extends SvelteComponent<ChecklistMultipleChoices3Props> {}
