import type { DefineComponent } from 'vue';

export interface CopyrightSmallProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CopyrightSmall: DefineComponent<CopyrightSmallProps>;

export default CopyrightSmall;
export { CopyrightSmall };
