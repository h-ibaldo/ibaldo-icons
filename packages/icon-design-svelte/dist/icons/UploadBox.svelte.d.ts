import { SvelteComponent } from 'svelte';

export interface UploadBoxProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class UploadBox extends SvelteComponent<UploadBoxProps> {}
