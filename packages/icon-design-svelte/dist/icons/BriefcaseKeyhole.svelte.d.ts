import { SvelteComponent } from 'svelte';

export interface BriefcaseKeyholeProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BriefcaseKeyhole extends SvelteComponent<BriefcaseKeyholeProps> {}
