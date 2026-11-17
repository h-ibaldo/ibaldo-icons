import { SvelteComponent } from 'svelte';

export interface OpenPaneRightBoldProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class OpenPaneRightBold extends SvelteComponent<OpenPaneRightBoldProps> {}
