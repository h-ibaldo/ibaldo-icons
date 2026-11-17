import { SvelteComponent } from 'svelte';

export interface UserFacePompadourProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class UserFacePompadour extends SvelteComponent<UserFacePompadourProps> {}
