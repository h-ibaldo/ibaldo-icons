import { SvelteComponent } from 'svelte';

export interface WidgetXBlobProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WidgetXBlob extends SvelteComponent<WidgetXBlobProps> {}
