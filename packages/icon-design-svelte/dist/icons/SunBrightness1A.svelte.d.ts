import { SvelteComponent } from 'svelte';

export interface SunBrightness1AProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SunBrightness1A extends SvelteComponent<SunBrightness1AProps> {}
