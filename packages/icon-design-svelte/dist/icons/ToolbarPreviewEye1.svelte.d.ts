import { SvelteComponent } from 'svelte';

export interface ToolbarPreviewEye1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ToolbarPreviewEye1 extends SvelteComponent<ToolbarPreviewEye1Props> {}
