import type { DefineComponent } from 'vue';

export interface FolderUserProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FolderUser: DefineComponent<FolderUserProps>;

export default FolderUser;
export { FolderUser };
