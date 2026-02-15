import { SvelteComponent } from 'svelte';

export interface CheckboxRadioSelect1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CheckboxRadioSelect1 extends SvelteComponent<CheckboxRadioSelect1Props> {}
