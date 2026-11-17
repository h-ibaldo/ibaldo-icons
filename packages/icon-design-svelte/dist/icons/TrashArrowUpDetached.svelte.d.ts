import { SvelteComponent } from 'svelte';

export interface TrashArrowUpDetachedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TrashArrowUpDetached extends SvelteComponent<TrashArrowUpDetachedProps> {}
