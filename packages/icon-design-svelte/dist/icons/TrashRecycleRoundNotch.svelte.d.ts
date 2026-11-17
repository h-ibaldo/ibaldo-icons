import { SvelteComponent } from 'svelte';

export interface TrashRecycleRoundNotchProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TrashRecycleRoundNotch extends SvelteComponent<TrashRecycleRoundNotchProps> {}
