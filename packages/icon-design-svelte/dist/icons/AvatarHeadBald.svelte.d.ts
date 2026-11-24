import { SvelteComponent } from 'svelte';

export interface AvatarHeadBaldProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AvatarHeadBald extends SvelteComponent<AvatarHeadBaldProps> {}
