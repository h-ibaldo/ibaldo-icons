import { SvelteComponent } from 'svelte';

export interface AvatarFaceLongBraidsProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AvatarFaceLongBraids extends SvelteComponent<AvatarFaceLongBraidsProps> {}
