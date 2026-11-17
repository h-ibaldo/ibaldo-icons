import { SvelteComponent } from 'svelte';

export interface GearTrayProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class GearTray extends SvelteComponent<GearTrayProps> {}
