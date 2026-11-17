import { SvelteComponent } from 'svelte';

export interface UploadArrowSquaresProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class UploadArrowSquares extends SvelteComponent<UploadArrowSquaresProps> {}
