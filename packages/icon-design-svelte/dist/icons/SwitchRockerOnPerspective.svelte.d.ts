import { SvelteComponent } from 'svelte';

export interface SwitchRockerOnPerspectiveProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SwitchRockerOnPerspective extends SvelteComponent<SwitchRockerOnPerspectiveProps> {}
