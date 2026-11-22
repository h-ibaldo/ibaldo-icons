import { SvelteComponent } from 'svelte';

export interface UserArrowRightWideProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class UserArrowRightWide extends SvelteComponent<UserArrowRightWideProps> {}
