import { SvelteComponent } from 'svelte';

export interface ChatXCircleBoxyProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatXCircleBoxy extends SvelteComponent<ChatXCircleBoxyProps> {}
