import { SvelteComponent } from 'svelte';

export interface AvatarFaceLongSweptBangsProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AvatarFaceLongSweptBangs extends SvelteComponent<AvatarFaceLongSweptBangsProps> {}
