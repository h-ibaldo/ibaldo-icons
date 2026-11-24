import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BrainCircuitProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BrainCircuit: ForwardRefExoticComponent<BrainCircuitProps & RefAttributes<Svg>>;

export default BrainCircuit;
export { BrainCircuit };
