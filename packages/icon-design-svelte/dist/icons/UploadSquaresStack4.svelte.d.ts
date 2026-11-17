import { SvelteComponent } from 'svelte';

export interface UploadSquaresStack4Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class UploadSquaresStack4 extends SvelteComponent<UploadSquaresStack4Props> {}
