import { SvelteComponent } from 'svelte';

export interface CheckMarkSolidOrganicProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CheckMarkSolidOrganic extends SvelteComponent<CheckMarkSolidOrganicProps> {}
