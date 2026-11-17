import { SvelteComponent } from 'svelte';

export interface AvatarHeadLongCenterPartProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AvatarHeadLongCenterPart extends SvelteComponent<AvatarHeadLongCenterPartProps> {}
