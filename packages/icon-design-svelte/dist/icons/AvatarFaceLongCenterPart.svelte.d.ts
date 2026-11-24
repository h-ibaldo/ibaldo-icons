import { SvelteComponent } from 'svelte';

export interface AvatarFaceLongCenterPartProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AvatarFaceLongCenterPart extends SvelteComponent<AvatarFaceLongCenterPartProps> {}
