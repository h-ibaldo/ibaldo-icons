import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CompassDashedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CompassDashed: ForwardRefExoticComponent<CompassDashedProps & RefAttributes<Svg>>;

export default CompassDashed;
export { CompassDashed };
