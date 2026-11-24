import type { DefineComponent } from 'vue';

export interface CodeCircleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CodeCircle: DefineComponent<CodeCircleProps>;

export default CodeCircle;
export { CodeCircle };
