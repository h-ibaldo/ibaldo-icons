import { SvelteComponent } from 'svelte';

export interface Bell4SilentProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Bell4Silent extends SvelteComponent<Bell4SilentProps> {}
