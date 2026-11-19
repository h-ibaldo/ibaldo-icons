import { SvelteComponent } from 'svelte';

export interface DownloadTrayStepProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class DownloadTrayStep extends SvelteComponent<DownloadTrayStepProps> {}
