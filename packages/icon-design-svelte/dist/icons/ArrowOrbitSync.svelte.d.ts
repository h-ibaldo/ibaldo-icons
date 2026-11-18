import { SvelteComponent } from 'svelte';

export interface ArrowOrbitSyncProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowOrbitSync extends SvelteComponent<ArrowOrbitSyncProps> {}
