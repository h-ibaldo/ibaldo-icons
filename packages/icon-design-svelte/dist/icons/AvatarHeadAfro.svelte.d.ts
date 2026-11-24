import { SvelteComponent } from 'svelte';

export interface AvatarHeadAfroProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AvatarHeadAfro extends SvelteComponent<AvatarHeadAfroProps> {}
