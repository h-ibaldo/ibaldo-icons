import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BrainCircuitProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BrainCircuit: ForwardRefExoticComponent<BrainCircuitProps & RefAttributes<SVGSVGElement>>;

export default BrainCircuit;
export { BrainCircuit };
