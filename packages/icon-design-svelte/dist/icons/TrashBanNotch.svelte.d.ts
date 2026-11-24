import { SvelteComponent } from 'svelte';

export interface TrashBanNotchProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TrashBanNotch extends SvelteComponent<TrashBanNotchProps> {}
