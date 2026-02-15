import { SvelteComponent } from 'svelte';

export interface UploadArrowUpDashedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class UploadArrowUpDashed extends SvelteComponent<UploadArrowUpDashedProps> {}
