import { SvelteComponent } from 'svelte';

export interface ChatStackOneCircleFacingProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackOneCircleFacing extends SvelteComponent<ChatStackOneCircleFacingProps> {}
