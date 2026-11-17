import { SvelteComponent } from 'svelte';

export interface AvatarHeadSweptBangsProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AvatarHeadSweptBangs extends SvelteComponent<AvatarHeadSweptBangsProps> {}
