import { SvelteComponent } from 'svelte';

export interface UploadSquaresStack3Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class UploadSquaresStack3 extends SvelteComponent<UploadSquaresStack3Props> {}
