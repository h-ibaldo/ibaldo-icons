import type { DefineComponent } from 'vue';

export interface BrainCircuitProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BrainCircuit: DefineComponent<BrainCircuitProps>;

export default BrainCircuit;
export { BrainCircuit };
