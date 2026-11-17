import { SvelteComponent } from 'svelte';

export interface Cloud3BoxUploadProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Cloud3BoxUpload extends SvelteComponent<Cloud3BoxUploadProps> {}
