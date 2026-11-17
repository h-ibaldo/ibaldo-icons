import { SvelteComponent } from 'svelte';

export interface AvatarHeadShortCombedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AvatarHeadShortCombed extends SvelteComponent<AvatarHeadShortCombedProps> {}
