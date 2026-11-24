import { SvelteComponent } from 'svelte';

export interface DockLeftProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class DockLeft extends SvelteComponent<DockLeftProps> {}
