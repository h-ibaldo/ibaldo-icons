import { SvelteComponent } from 'svelte';

export interface TrashXNotchProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TrashXNotch extends SvelteComponent<TrashXNotchProps> {}
