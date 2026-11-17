import { SvelteComponent } from 'svelte';

export interface AvatarFaceMohawkProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AvatarFaceMohawk extends SvelteComponent<AvatarFaceMohawkProps> {}
