import { SvelteComponent } from 'svelte';

export interface ArrowSyncHexagonProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowSyncHexagon extends SvelteComponent<ArrowSyncHexagonProps> {}
