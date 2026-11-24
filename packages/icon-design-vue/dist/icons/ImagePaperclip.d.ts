import type { DefineComponent } from 'vue';

export interface ImagePaperclipProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ImagePaperclip: DefineComponent<ImagePaperclipProps>;

export default ImagePaperclip;
export { ImagePaperclip };
