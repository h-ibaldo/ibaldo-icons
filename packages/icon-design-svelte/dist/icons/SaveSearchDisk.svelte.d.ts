import { SvelteComponent } from 'svelte';

export interface SaveSearchDiskProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SaveSearchDisk extends SvelteComponent<SaveSearchDiskProps> {}
