import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PipetteDropProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PipetteDrop: ForwardRefExoticComponent<PipetteDropProps & RefAttributes<Svg>>;

export default PipetteDrop;
export { PipetteDrop };
