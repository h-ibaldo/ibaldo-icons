import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ClosedCaptionBareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ClosedCaptionBare: ForwardRefExoticComponent<ClosedCaptionBareProps & RefAttributes<Svg>>;

export default ClosedCaptionBare;
export { ClosedCaptionBare };
