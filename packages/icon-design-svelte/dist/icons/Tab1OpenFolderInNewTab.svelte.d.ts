import { SvelteComponent } from 'svelte';

export interface Tab1OpenFolderInNewTabProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Tab1OpenFolderInNewTab extends SvelteComponent<Tab1OpenFolderInNewTabProps> {}
