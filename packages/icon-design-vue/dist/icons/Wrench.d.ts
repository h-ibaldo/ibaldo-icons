import type { DefineComponent } from 'vue';

export interface WrenchProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Wrench: DefineComponent<WrenchProps>;

export default Wrench;
export { Wrench };
