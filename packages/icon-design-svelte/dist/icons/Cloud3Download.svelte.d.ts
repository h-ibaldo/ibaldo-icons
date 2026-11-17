import { SvelteComponent } from 'svelte';

export interface Cloud3DownloadProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Cloud3Download extends SvelteComponent<Cloud3DownloadProps> {}
