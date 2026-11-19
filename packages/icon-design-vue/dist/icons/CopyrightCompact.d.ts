import type { DefineComponent } from 'vue';

export interface CopyrightCompactProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CopyrightCompact: DefineComponent<CopyrightCompactProps>;

export default CopyrightCompact;
export { CopyrightCompact };
