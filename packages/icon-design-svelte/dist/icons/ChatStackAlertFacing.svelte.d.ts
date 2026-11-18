import { SvelteComponent } from 'svelte';

export interface ChatStackAlertFacingProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackAlertFacing extends SvelteComponent<ChatStackAlertFacingProps> {}
