import { SvelteComponent } from 'svelte';

export interface UserEditWideProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class UserEditWide extends SvelteComponent<UserEditWideProps> {}
