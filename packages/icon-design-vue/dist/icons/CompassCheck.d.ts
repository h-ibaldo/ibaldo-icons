import type { DefineComponent } from 'vue';

export interface CompassCheckProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CompassCheck: DefineComponent<CompassCheckProps>;

export default CompassCheck;
export { CompassCheck };
