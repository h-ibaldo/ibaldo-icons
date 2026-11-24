import { SvelteComponent } from 'svelte';

export interface AvatarHeadShoulderCenterPartProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AvatarHeadShoulderCenterPart extends SvelteComponent<AvatarHeadShoulderCenterPartProps> {}
