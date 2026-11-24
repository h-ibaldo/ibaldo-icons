import { SvelteComponent } from 'svelte';

export interface TrayStackProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TrayStack extends SvelteComponent<TrayStackProps> {}
