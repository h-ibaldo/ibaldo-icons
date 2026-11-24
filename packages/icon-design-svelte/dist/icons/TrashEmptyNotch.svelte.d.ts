import { SvelteComponent } from 'svelte';

export interface TrashEmptyNotchProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TrashEmptyNotch extends SvelteComponent<TrashEmptyNotchProps> {}
