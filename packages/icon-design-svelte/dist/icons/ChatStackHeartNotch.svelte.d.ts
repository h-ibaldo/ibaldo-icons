import { SvelteComponent } from 'svelte';

export interface ChatStackHeartNotchProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackHeartNotch extends SvelteComponent<ChatStackHeartNotchProps> {}
