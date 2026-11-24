import { SvelteComponent } from 'svelte';

export interface SaveFolderProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SaveFolder extends SvelteComponent<SaveFolderProps> {}
