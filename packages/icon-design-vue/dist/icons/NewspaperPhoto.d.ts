import type { DefineComponent } from 'vue';

export interface NewspaperPhotoProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const NewspaperPhoto: DefineComponent<NewspaperPhotoProps>;

export default NewspaperPhoto;
export { NewspaperPhoto };
