import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ClosedCaptionOctagonProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ClosedCaptionOctagon: ForwardRefExoticComponent<ClosedCaptionOctagonProps & RefAttributes<Svg>>;

export default ClosedCaptionOctagon;
export { ClosedCaptionOctagon };
