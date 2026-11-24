import type { DefineComponent } from 'vue';

export interface CrownUnderlineProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CrownUnderline: DefineComponent<CrownUnderlineProps>;

export default CrownUnderline;
export { CrownUnderline };
