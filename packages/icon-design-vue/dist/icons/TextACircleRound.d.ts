import type { DefineComponent } from 'vue';

export interface TextACircleRoundProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TextACircleRound: DefineComponent<TextACircleRoundProps>;

export default TextACircleRound;
export { TextACircleRound };
