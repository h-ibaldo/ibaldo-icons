import type { DefineComponent } from 'vue';

export interface CrownTaperedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CrownTapered: DefineComponent<CrownTaperedProps>;

export default CrownTapered;
export { CrownTapered };
