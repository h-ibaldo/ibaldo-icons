import { SvelteComponent } from 'svelte';

export interface Cloud2DownloadProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Cloud2Download extends SvelteComponent<Cloud2DownloadProps> {}
