import { SvelteComponent } from 'svelte';

export interface UserHeadPompadourProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class UserHeadPompadour extends SvelteComponent<UserHeadPompadourProps> {}
