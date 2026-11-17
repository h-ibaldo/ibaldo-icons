import { SvelteComponent } from 'svelte';

export interface AvatarFaceLongBangsProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AvatarFaceLongBangs extends SvelteComponent<AvatarFaceLongBangsProps> {}
