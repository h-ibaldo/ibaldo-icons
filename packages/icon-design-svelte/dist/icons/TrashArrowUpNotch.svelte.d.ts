import { SvelteComponent } from 'svelte';

export interface TrashArrowUpNotchProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TrashArrowUpNotch extends SvelteComponent<TrashArrowUpNotchProps> {}
