import type { DefineComponent } from 'vue';

export interface JustifyTopProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const JustifyTop: DefineComponent<JustifyTopProps>;

export default JustifyTop;
export { JustifyTop };
