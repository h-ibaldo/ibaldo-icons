import { SvelteComponent } from 'svelte';

export interface AvatarHeadFlippedEndsProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AvatarHeadFlippedEnds extends SvelteComponent<AvatarHeadFlippedEndsProps> {}
