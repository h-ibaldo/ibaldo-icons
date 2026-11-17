import { SvelteComponent } from 'svelte';

export interface AvatarFaceLongSidePartProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AvatarFaceLongSidePart extends SvelteComponent<AvatarFaceLongSidePartProps> {}
