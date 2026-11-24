import { SvelteComponent } from 'svelte';

export interface ScissorsWideDottedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ScissorsWideDotted extends SvelteComponent<ScissorsWideDottedProps> {}
