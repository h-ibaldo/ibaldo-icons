import { SvelteComponent } from 'svelte';

export interface CropSyncProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CropSync extends SvelteComponent<CropSyncProps> {}
