import { SvelteComponent } from 'svelte';

export interface AvatarFaceSweptBangsProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AvatarFaceSweptBangs extends SvelteComponent<AvatarFaceSweptBangsProps> {}
