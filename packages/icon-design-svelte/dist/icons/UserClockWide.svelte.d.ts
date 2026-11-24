import { SvelteComponent } from 'svelte';

export interface UserClockWideProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class UserClockWide extends SvelteComponent<UserClockWideProps> {}
