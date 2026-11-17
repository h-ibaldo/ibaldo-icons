import { SvelteComponent } from 'svelte';

export interface UploadSquareNotchProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class UploadSquareNotch extends SvelteComponent<UploadSquareNotchProps> {}
