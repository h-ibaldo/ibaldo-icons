import { SvelteComponent } from 'svelte';

export interface UserWideProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class UserWide extends SvelteComponent<UserWideProps> {}
