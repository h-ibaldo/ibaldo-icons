import { SvelteComponent } from 'svelte';

export interface RadioCheckProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class RadioCheck extends SvelteComponent<RadioCheckProps> {}
