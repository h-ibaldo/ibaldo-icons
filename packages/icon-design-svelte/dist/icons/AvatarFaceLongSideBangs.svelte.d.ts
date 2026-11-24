import { SvelteComponent } from 'svelte';

export interface AvatarFaceLongSideBangsProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AvatarFaceLongSideBangs extends SvelteComponent<AvatarFaceLongSideBangsProps> {}
