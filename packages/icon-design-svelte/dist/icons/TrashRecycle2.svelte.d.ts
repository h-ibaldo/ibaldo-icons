import { SvelteComponent } from 'svelte';

export interface TrashRecycle2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TrashRecycle2 extends SvelteComponent<TrashRecycle2Props> {}
