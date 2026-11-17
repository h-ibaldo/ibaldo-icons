import { SvelteComponent } from 'svelte';

export interface TrashRecycle1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TrashRecycle1 extends SvelteComponent<TrashRecycle1Props> {}
