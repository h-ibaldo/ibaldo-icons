import type { DefineComponent } from 'vue';

export interface CrownRoyalProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CrownRoyal: DefineComponent<CrownRoyalProps>;

export default CrownRoyal;
export { CrownRoyal };
