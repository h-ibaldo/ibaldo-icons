import type { DefineComponent } from 'vue';

export interface TextAaSquareBoxyProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TextAaSquareBoxy: DefineComponent<TextAaSquareBoxyProps>;

export default TextAaSquareBoxy;
export { TextAaSquareBoxy };
