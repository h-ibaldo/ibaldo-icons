import { SvelteComponent } from 'svelte';

export interface SunBrightness1CProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SunBrightness1C extends SvelteComponent<SunBrightness1CProps> {}
