import { SvelteComponent } from 'svelte';

export interface UploadArrowCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class UploadArrowCircle extends SvelteComponent<UploadArrowCircleProps> {}
