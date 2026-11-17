import { SvelteComponent } from 'svelte';

export interface CheckBoldOrganicProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CheckBoldOrganic extends SvelteComponent<CheckBoldOrganicProps> {}
