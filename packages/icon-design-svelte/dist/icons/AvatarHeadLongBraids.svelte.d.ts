import { SvelteComponent } from 'svelte';

export interface AvatarHeadLongBraidsProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AvatarHeadLongBraids extends SvelteComponent<AvatarHeadLongBraidsProps> {}
