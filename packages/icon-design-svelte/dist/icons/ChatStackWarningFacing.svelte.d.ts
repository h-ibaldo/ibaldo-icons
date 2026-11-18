import { SvelteComponent } from 'svelte';

export interface ChatStackWarningFacingProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackWarningFacing extends SvelteComponent<ChatStackWarningFacingProps> {}
