import { SvelteComponent } from 'svelte';

export interface AvatarHeadSideBangsProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AvatarHeadSideBangs extends SvelteComponent<AvatarHeadSideBangsProps> {}
