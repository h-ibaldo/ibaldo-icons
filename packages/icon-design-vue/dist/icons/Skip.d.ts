import type { DefineComponent } from 'vue';

export interface SkipProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Skip: DefineComponent<SkipProps>;

export default Skip;
export { Skip };
