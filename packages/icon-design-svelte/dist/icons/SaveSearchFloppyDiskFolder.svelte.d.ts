import { SvelteComponent } from 'svelte';

export interface SaveSearchFloppyDiskFolderProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SaveSearchFloppyDiskFolder extends SvelteComponent<SaveSearchFloppyDiskFolderProps> {}
