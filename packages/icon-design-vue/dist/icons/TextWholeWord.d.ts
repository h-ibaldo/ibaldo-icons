import type { DefineComponent } from 'vue';

export interface TextWholeWordProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TextWholeWord: DefineComponent<TextWholeWordProps>;

export default TextWholeWord;
export { TextWholeWord };
