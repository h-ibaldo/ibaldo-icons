import type { DefineComponent } from 'vue';

export interface JustifyRightProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const JustifyRight: DefineComponent<JustifyRightProps>;

export default JustifyRight;
export { JustifyRight };
