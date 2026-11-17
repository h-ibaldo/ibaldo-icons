import { SvelteComponent } from 'svelte';

export interface AvatarHeadShortFringeProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AvatarHeadShortFringe extends SvelteComponent<AvatarHeadShortFringeProps> {}
