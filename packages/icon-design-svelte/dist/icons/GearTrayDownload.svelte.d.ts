import { SvelteComponent } from 'svelte';

export interface GearTrayDownloadProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class GearTrayDownload extends SvelteComponent<GearTrayDownloadProps> {}
