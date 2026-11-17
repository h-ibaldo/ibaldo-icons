import { SvelteComponent } from 'svelte';

export interface SwitchRockerOffPerspectiveProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SwitchRockerOffPerspective extends SvelteComponent<SwitchRockerOffPerspectiveProps> {}
