import { SvelteComponent } from 'svelte';

export interface AvatarHeadBobBangsProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AvatarHeadBobBangs extends SvelteComponent<AvatarHeadBobBangsProps> {}
