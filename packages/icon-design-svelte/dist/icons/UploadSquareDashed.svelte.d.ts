import { SvelteComponent } from 'svelte';

export interface UploadSquareDashedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class UploadSquareDashed extends SvelteComponent<UploadSquareDashedProps> {}
