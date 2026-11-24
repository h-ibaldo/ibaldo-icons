import type { DefineComponent } from 'vue';

export interface HashCircleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const HashCircle: DefineComponent<HashCircleProps>;

export default HashCircle;
export { HashCircle };
