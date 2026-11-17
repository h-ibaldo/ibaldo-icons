import { SvelteComponent } from 'svelte';

export interface AvatarHeadShortProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AvatarHeadShort extends SvelteComponent<AvatarHeadShortProps> {}
