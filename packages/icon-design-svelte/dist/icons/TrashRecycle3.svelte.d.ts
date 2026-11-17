import { SvelteComponent } from 'svelte';

export interface TrashRecycle3Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TrashRecycle3 extends SvelteComponent<TrashRecycle3Props> {}
