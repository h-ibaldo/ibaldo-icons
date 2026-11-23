import type { DefineComponent } from 'vue';

export interface TextInitialProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TextInitial: DefineComponent<TextInitialProps>;

export default TextInitial;
export { TextInitial };
