import type { DefineComponent } from 'vue';

export interface CastProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Cast: DefineComponent<CastProps>;

export default Cast;
export { Cast };
