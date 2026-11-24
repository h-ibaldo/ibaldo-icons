import { SvelteComponent } from 'svelte';

export interface AvatarHeadRoundCenterPartProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AvatarHeadRoundCenterPart extends SvelteComponent<AvatarHeadRoundCenterPartProps> {}
