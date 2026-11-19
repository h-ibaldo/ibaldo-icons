import type { DefineComponent } from 'vue';

export interface TextASquareRoundProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TextASquareRound: DefineComponent<TextASquareRoundProps>;

export default TextASquareRound;
export { TextASquareRound };
