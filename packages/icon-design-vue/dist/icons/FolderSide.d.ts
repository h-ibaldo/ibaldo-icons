import type { DefineComponent } from 'vue';

export interface FolderSideProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FolderSide: DefineComponent<FolderSideProps>;

export default FolderSide;
export { FolderSide };
