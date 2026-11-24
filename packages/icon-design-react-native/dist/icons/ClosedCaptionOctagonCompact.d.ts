import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ClosedCaptionOctagonCompactProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ClosedCaptionOctagonCompact: ForwardRefExoticComponent<ClosedCaptionOctagonCompactProps & RefAttributes<Svg>>;

export default ClosedCaptionOctagonCompact;
export { ClosedCaptionOctagonCompact };
