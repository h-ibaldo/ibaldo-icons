import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface VotePlusMinusProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const VotePlusMinus: ForwardRefExoticComponent<VotePlusMinusProps & RefAttributes<Svg>>;

export default VotePlusMinus;
export { VotePlusMinus };
