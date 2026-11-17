import { SvelteComponent } from 'svelte';

export interface ClockAttachmentProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ClockAttachment extends SvelteComponent<ClockAttachmentProps> {}
