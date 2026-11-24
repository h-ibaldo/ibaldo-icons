import { SvelteComponent } from 'svelte';

export interface ChatStackDotsCircleFacingProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackDotsCircleFacing extends SvelteComponent<ChatStackDotsCircleFacingProps> {}
