import { SvelteComponent } from 'svelte';

export interface UploadSquaresStack2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class UploadSquaresStack2 extends SvelteComponent<UploadSquaresStack2Props> {}
