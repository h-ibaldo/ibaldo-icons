import { SvelteComponent } from 'svelte';

export interface UploadCircleFlatProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class UploadCircleFlat extends SvelteComponent<UploadCircleFlatProps> {}
