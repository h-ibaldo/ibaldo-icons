import { SvelteComponent } from 'svelte';

export interface CloudViewProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CloudView extends SvelteComponent<CloudViewProps> {}
