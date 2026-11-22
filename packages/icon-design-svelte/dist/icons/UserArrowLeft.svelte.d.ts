import { SvelteComponent } from 'svelte';

export interface UserArrowLeftProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class UserArrowLeft extends SvelteComponent<UserArrowLeftProps> {}
