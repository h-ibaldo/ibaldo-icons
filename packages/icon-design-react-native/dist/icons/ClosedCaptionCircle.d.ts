import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ClosedCaptionCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ClosedCaptionCircle: ForwardRefExoticComponent<ClosedCaptionCircleProps & RefAttributes<Svg>>;

export default ClosedCaptionCircle;
export { ClosedCaptionCircle };
