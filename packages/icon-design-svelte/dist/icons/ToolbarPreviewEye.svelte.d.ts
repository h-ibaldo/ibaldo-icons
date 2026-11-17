import { SvelteComponent } from 'svelte';

export interface ToolbarPreviewEyeProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ToolbarPreviewEye extends SvelteComponent<ToolbarPreviewEyeProps> {}
