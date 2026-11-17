import { SvelteComponent } from 'svelte';

export interface TrashBanDetachedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TrashBanDetached extends SvelteComponent<TrashBanDetachedProps> {}
