import { SvelteComponent } from 'svelte';

export interface DatabaseArrowLeftProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class DatabaseArrowLeft extends SvelteComponent<DatabaseArrowLeftProps> {}
