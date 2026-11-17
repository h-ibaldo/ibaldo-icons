import { SvelteComponent } from 'svelte';

export interface Cloud3UploadAltProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Cloud3UploadAlt extends SvelteComponent<Cloud3UploadAltProps> {}
