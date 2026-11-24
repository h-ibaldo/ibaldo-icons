import { SvelteComponent } from 'svelte';

export interface BookmarkStripeProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BookmarkStripe extends SvelteComponent<BookmarkStripeProps> {}
