import { SvelteComponent } from 'svelte';

export interface UserPlusWideProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class UserPlusWide extends SvelteComponent<UserPlusWideProps> {}
