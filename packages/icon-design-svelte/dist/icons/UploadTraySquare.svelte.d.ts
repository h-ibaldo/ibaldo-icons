import { SvelteComponent } from 'svelte';

export interface UploadTraySquareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class UploadTraySquare extends SvelteComponent<UploadTraySquareProps> {}
