import { SvelteComponent } from 'svelte';

export interface UserArrowLeftCenterWideProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class UserArrowLeftCenterWide extends SvelteComponent<UserArrowLeftCenterWideProps> {}
