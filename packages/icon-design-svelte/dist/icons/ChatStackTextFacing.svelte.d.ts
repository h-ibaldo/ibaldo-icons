import { SvelteComponent } from 'svelte';

export interface ChatStackTextFacingProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackTextFacing extends SvelteComponent<ChatStackTextFacingProps> {}
