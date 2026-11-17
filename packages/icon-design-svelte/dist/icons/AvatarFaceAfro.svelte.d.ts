import { SvelteComponent } from 'svelte';

export interface AvatarFaceAfroProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AvatarFaceAfro extends SvelteComponent<AvatarFaceAfroProps> {}
