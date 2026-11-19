import type { DefineComponent } from 'vue';

export interface CopyrightProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Copyright: DefineComponent<CopyrightProps>;

export default Copyright;
export { Copyright };
