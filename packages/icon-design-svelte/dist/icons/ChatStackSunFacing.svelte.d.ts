import { SvelteComponent } from 'svelte';

export interface ChatStackSunFacingProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackSunFacing extends SvelteComponent<ChatStackSunFacingProps> {}
