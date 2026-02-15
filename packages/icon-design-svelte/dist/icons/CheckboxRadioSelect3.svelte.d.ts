import { SvelteComponent } from 'svelte';

export interface CheckboxRadioSelect3Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CheckboxRadioSelect3 extends SvelteComponent<CheckboxRadioSelect3Props> {}
