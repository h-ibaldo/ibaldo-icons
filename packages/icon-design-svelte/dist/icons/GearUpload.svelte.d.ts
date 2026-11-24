import { SvelteComponent } from 'svelte';

export interface GearUploadProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class GearUpload extends SvelteComponent<GearUploadProps> {}
