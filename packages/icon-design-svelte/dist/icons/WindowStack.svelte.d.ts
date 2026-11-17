import { SvelteComponent } from 'svelte';

export interface WindowStackProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WindowStack extends SvelteComponent<WindowStackProps> {}
