import { SvelteComponent } from 'svelte';

export interface UploadArrowDashedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class UploadArrowDashed extends SvelteComponent<UploadArrowDashedProps> {}
