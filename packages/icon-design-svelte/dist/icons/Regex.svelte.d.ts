import { SvelteComponent } from 'svelte';

export interface RegexProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Regex extends SvelteComponent<RegexProps> {}
