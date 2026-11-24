import type { DefineComponent } from 'vue';

export interface ProportionsProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Proportions: DefineComponent<ProportionsProps>;

export default Proportions;
export { Proportions };
