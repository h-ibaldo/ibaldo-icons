import { SvelteComponent } from 'svelte';

export interface AvatarHeadShoulderSidePartProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AvatarHeadShoulderSidePart extends SvelteComponent<AvatarHeadShoulderSidePartProps> {}
