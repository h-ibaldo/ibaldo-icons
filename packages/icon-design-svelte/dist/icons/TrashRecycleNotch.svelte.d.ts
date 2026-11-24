import { SvelteComponent } from 'svelte';

export interface TrashRecycleNotchProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TrashRecycleNotch extends SvelteComponent<TrashRecycleNotchProps> {}
