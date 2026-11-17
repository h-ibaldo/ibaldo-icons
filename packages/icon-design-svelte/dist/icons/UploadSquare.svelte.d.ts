import { SvelteComponent } from 'svelte';

export interface UploadSquareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class UploadSquare extends SvelteComponent<UploadSquareProps> {}
