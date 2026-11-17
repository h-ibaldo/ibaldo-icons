import { SvelteComponent } from 'svelte';

export interface AvatarHeadSwoopProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AvatarHeadSwoop extends SvelteComponent<AvatarHeadSwoopProps> {}
