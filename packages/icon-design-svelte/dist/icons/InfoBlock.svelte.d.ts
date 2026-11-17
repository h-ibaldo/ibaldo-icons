import { SvelteComponent } from 'svelte';

export interface InfoBlockProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class InfoBlock extends SvelteComponent<InfoBlockProps> {}
