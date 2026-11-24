import { SvelteComponent } from 'svelte';

export interface UploadCircleDashedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class UploadCircleDashed extends SvelteComponent<UploadCircleDashedProps> {}
