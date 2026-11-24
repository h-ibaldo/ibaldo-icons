import { SvelteComponent } from 'svelte';

export interface UserCircleWideProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class UserCircleWide extends SvelteComponent<UserCircleWideProps> {}
