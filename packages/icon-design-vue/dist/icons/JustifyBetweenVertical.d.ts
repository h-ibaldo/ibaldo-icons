import type { DefineComponent } from 'vue';

export interface JustifyBetweenVerticalProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const JustifyBetweenVertical: DefineComponent<JustifyBetweenVerticalProps>;

export default JustifyBetweenVertical;
export { JustifyBetweenVertical };
