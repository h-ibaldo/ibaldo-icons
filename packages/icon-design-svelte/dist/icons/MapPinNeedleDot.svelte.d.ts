import { SvelteComponent } from 'svelte';

export interface MapPinNeedleDotProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MapPinNeedleDot extends SvelteComponent<MapPinNeedleDotProps> {}
