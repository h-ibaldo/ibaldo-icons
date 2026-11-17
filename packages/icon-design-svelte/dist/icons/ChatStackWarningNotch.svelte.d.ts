import { SvelteComponent } from 'svelte';

export interface ChatStackWarningNotchProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackWarningNotch extends SvelteComponent<ChatStackWarningNotchProps> {}
