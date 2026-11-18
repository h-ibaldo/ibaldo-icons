import { SvelteComponent } from 'svelte';

export interface OptionsRadioCheckXProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class OptionsRadioCheckX extends SvelteComponent<OptionsRadioCheckXProps> {}
