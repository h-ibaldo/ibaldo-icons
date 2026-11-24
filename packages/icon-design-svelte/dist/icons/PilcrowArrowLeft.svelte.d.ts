import { SvelteComponent } from 'svelte';

export interface PilcrowArrowLeftProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PilcrowArrowLeft extends SvelteComponent<PilcrowArrowLeftProps> {}
