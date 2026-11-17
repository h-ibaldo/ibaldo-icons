import { SvelteComponent } from 'svelte';

export interface UploadCircleDashedHalfProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class UploadCircleDashedHalf extends SvelteComponent<UploadCircleDashedHalfProps> {}
