import { SvelteComponent } from 'svelte';

export interface UserArrowUpWideProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class UserArrowUpWide extends SvelteComponent<UserArrowUpWideProps> {}
