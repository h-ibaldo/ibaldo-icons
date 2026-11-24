import { SvelteComponent } from 'svelte';

export interface BriefcaseFlapWideProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BriefcaseFlapWide extends SvelteComponent<BriefcaseFlapWideProps> {}
