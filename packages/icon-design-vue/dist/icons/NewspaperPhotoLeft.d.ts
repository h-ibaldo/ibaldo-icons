import type { DefineComponent } from 'vue';

export interface NewspaperPhotoLeftProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const NewspaperPhotoLeft: DefineComponent<NewspaperPhotoLeftProps>;

export default NewspaperPhotoLeft;
export { NewspaperPhotoLeft };
