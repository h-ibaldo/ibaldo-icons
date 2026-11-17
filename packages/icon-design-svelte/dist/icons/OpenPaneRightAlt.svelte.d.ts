import { SvelteComponent } from 'svelte';

export interface OpenPaneRightAltProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class OpenPaneRightAlt extends SvelteComponent<OpenPaneRightAltProps> {}
