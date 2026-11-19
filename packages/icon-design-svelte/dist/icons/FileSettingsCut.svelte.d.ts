import { SvelteComponent } from 'svelte';

export interface FileSettingsCutProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FileSettingsCut extends SvelteComponent<FileSettingsCutProps> {}
