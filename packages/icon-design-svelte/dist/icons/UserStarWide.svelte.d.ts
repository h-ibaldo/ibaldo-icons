import { SvelteComponent } from 'svelte';

export interface UserStarWideProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class UserStarWide extends SvelteComponent<UserStarWideProps> {}
