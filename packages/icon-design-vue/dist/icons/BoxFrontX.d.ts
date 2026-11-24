import type { DefineComponent } from 'vue';

export interface BoxFrontXProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BoxFrontX: DefineComponent<BoxFrontXProps>;

export default BoxFrontX;
export { BoxFrontX };
