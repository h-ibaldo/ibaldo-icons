import type { DefineComponent } from 'vue';

export interface VotePlusMinusProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const VotePlusMinus: DefineComponent<VotePlusMinusProps>;

export default VotePlusMinus;
export { VotePlusMinus };
