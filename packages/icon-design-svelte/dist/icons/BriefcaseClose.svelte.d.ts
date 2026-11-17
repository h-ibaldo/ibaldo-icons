import { SvelteComponent } from 'svelte';

export interface BriefcaseCloseProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BriefcaseClose extends SvelteComponent<BriefcaseCloseProps> {}
