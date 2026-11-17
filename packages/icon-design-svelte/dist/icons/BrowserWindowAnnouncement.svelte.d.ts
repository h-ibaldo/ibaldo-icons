import { SvelteComponent } from 'svelte';

export interface BrowserWindowAnnouncementProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BrowserWindowAnnouncement extends SvelteComponent<BrowserWindowAnnouncementProps> {}
