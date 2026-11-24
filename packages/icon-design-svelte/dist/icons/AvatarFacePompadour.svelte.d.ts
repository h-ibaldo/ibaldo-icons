import { SvelteComponent } from 'svelte';

export interface AvatarFacePompadourProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AvatarFacePompadour extends SvelteComponent<AvatarFacePompadourProps> {}
