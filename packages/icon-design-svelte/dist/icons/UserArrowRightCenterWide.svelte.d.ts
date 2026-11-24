import { SvelteComponent } from 'svelte';

export interface UserArrowRightCenterWideProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class UserArrowRightCenterWide extends SvelteComponent<UserArrowRightCenterWideProps> {}
