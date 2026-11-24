import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ClosedCaptionCircleSmallProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ClosedCaptionCircleSmall: ForwardRefExoticComponent<ClosedCaptionCircleSmallProps & RefAttributes<Svg>>;

export default ClosedCaptionCircleSmall;
export { ClosedCaptionCircleSmall };
