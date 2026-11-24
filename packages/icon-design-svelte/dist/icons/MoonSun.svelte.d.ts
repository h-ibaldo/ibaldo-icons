import { SvelteComponent } from 'svelte';

export interface MoonSunProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MoonSun extends SvelteComponent<MoonSunProps> {}
