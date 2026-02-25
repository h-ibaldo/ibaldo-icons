import { SvelteComponent } from 'svelte';

export interface ToolbarPreviewEye3Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ToolbarPreviewEye3 extends SvelteComponent<ToolbarPreviewEye3Props> {}
