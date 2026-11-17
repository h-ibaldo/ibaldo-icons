import { SvelteComponent } from 'svelte';

export interface FormLabelsProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FormLabels extends SvelteComponent<FormLabelsProps> {}
