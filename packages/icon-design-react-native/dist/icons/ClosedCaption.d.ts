import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ClosedCaptionProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ClosedCaption: ForwardRefExoticComponent<ClosedCaptionProps & RefAttributes<Svg>>;

export default ClosedCaption;
export { ClosedCaption };
