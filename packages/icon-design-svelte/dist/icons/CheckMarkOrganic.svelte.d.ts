import { SvelteComponent } from 'svelte';

export interface CheckMarkOrganicProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CheckMarkOrganic extends SvelteComponent<CheckMarkOrganicProps> {}
