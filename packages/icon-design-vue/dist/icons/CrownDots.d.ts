import type { DefineComponent } from 'vue';

export interface CrownDotsProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CrownDots: DefineComponent<CrownDotsProps>;

export default CrownDots;
export { CrownDots };
