import { SvelteComponent } from 'svelte';

export interface UserMinusWideProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class UserMinusWide extends SvelteComponent<UserMinusWideProps> {}
