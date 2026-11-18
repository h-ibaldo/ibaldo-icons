import { SvelteComponent } from 'svelte';

export interface OptionsCheckPlusProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class OptionsCheckPlus extends SvelteComponent<OptionsCheckPlusProps> {}
