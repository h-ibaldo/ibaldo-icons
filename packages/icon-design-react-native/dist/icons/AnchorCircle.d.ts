import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface AnchorCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const AnchorCircle: ForwardRefExoticComponent<AnchorCircleProps & RefAttributes<Svg>>;

export default AnchorCircle;
export { AnchorCircle };
