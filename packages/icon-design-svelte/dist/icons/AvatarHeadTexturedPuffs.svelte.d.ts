import { SvelteComponent } from 'svelte';

export interface AvatarHeadTexturedPuffsProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AvatarHeadTexturedPuffs extends SvelteComponent<AvatarHeadTexturedPuffsProps> {}
