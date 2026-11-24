import type { DefineComponent } from 'vue';

export interface PipetteProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Pipette: DefineComponent<PipetteProps>;

export default Pipette;
export { Pipette };
