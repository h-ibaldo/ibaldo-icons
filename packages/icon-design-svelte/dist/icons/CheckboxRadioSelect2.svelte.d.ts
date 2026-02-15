import { SvelteComponent } from 'svelte';

export interface CheckboxRadioSelect2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CheckboxRadioSelect2 extends SvelteComponent<CheckboxRadioSelect2Props> {}
