import { SvelteComponent } from 'svelte';

export interface UserLockWideProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class UserLockWide extends SvelteComponent<UserLockWideProps> {}
