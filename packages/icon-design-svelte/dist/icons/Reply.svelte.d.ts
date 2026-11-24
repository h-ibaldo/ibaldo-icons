import { SvelteComponent } from 'svelte';

export interface ReplyProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Reply extends SvelteComponent<ReplyProps> {}
