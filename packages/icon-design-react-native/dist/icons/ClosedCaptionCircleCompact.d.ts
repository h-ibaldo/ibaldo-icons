import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ClosedCaptionCircleCompactProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ClosedCaptionCircleCompact: ForwardRefExoticComponent<ClosedCaptionCircleCompactProps & RefAttributes<Svg>>;

export default ClosedCaptionCircleCompact;
export { ClosedCaptionCircleCompact };
