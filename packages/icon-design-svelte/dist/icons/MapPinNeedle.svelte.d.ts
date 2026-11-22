import { SvelteComponent } from 'svelte';

export interface MapPinNeedleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MapPinNeedle extends SvelteComponent<MapPinNeedleProps> {}
