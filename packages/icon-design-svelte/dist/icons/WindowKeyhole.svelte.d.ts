import { SvelteComponent } from 'svelte';

export interface WindowKeyholeProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WindowKeyhole extends SvelteComponent<WindowKeyholeProps> {}
