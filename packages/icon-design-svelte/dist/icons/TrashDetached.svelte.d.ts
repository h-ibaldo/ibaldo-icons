import { SvelteComponent } from 'svelte';

export interface TrashDetachedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TrashDetached extends SvelteComponent<TrashDetachedProps> {}
