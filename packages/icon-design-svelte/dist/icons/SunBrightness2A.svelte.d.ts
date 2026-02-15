import { SvelteComponent } from 'svelte';

export interface SunBrightness2AProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SunBrightness2A extends SvelteComponent<SunBrightness2AProps> {}
