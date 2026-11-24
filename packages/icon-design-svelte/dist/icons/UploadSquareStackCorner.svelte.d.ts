import { SvelteComponent } from 'svelte';

export interface UploadSquareStackCornerProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class UploadSquareStackCorner extends SvelteComponent<UploadSquareStackCornerProps> {}
