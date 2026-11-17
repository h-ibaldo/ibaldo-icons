import { SvelteComponent } from 'svelte';

export interface UploadArrowSquareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class UploadArrowSquare extends SvelteComponent<UploadArrowSquareProps> {}
