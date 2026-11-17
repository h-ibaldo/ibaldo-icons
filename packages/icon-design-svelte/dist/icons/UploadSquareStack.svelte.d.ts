import { SvelteComponent } from 'svelte';

export interface UploadSquareStackProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class UploadSquareStack extends SvelteComponent<UploadSquareStackProps> {}
