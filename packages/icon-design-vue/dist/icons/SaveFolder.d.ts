import type { DefineComponent } from 'vue';

export interface SaveFolderProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SaveFolder: DefineComponent<SaveFolderProps>;

export default SaveFolder;
export { SaveFolder };
