import { SvelteComponent } from 'svelte';

export interface ToolbarMoreDetailsProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ToolbarMoreDetails extends SvelteComponent<ToolbarMoreDetailsProps> {}
