import type { DefineComponent } from 'vue';

export interface FileLinkSlantedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FileLinkSlanted: DefineComponent<FileLinkSlantedProps>;

export default FileLinkSlanted;
export { FileLinkSlanted };
