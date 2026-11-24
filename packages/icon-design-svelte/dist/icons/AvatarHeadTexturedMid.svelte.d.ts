import { SvelteComponent } from 'svelte';

export interface AvatarHeadTexturedMidProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AvatarHeadTexturedMid extends SvelteComponent<AvatarHeadTexturedMidProps> {}
