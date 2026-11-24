import type { DefineComponent } from 'vue';

export interface JustifyBetweenHorizontalProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const JustifyBetweenHorizontal: DefineComponent<JustifyBetweenHorizontalProps>;

export default JustifyBetweenHorizontal;
export { JustifyBetweenHorizontal };
