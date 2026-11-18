import { SvelteComponent } from 'svelte';

export interface WindowKeyholePlainProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WindowKeyholePlain extends SvelteComponent<WindowKeyholePlainProps> {}
