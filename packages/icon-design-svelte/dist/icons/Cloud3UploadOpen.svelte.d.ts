import { SvelteComponent } from 'svelte';

export interface Cloud3UploadOpenProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Cloud3UploadOpen extends SvelteComponent<Cloud3UploadOpenProps> {}
