import { SvelteComponent } from 'svelte';

export interface Cloud2UploadProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Cloud2Upload extends SvelteComponent<Cloud2UploadProps> {}
