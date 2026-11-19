import type { DefineComponent } from 'vue';

export interface AwardProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Award: DefineComponent<AwardProps>;

export default Award;
export { Award };
