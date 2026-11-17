import { SvelteComponent } from 'svelte';

export interface UploadBoxNotchProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class UploadBoxNotch extends SvelteComponent<UploadBoxNotchProps> {}
