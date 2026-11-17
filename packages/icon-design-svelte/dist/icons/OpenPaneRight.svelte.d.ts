import { SvelteComponent } from 'svelte';

export interface OpenPaneRightProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class OpenPaneRight extends SvelteComponent<OpenPaneRightProps> {}
