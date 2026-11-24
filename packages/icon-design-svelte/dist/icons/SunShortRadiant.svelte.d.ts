import { SvelteComponent } from 'svelte';

export interface SunShortRadiantProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SunShortRadiant extends SvelteComponent<SunShortRadiantProps> {}
