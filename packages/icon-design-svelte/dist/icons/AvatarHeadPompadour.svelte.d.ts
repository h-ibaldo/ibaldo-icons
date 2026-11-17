import { SvelteComponent } from 'svelte';

export interface AvatarHeadPompadourProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AvatarHeadPompadour extends SvelteComponent<AvatarHeadPompadourProps> {}
