import { SvelteComponent } from 'svelte';

export interface ToolbarPreviewEye2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ToolbarPreviewEye2 extends SvelteComponent<ToolbarPreviewEye2Props> {}
