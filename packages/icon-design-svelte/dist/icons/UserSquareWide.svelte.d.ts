import { SvelteComponent } from 'svelte';

export interface UserSquareWideProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class UserSquareWide extends SvelteComponent<UserSquareWideProps> {}
