import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface AnchorCircleBarbedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const AnchorCircleBarbed: ForwardRefExoticComponent<AnchorCircleBarbedProps & RefAttributes<Svg>>;

export default AnchorCircleBarbed;
export { AnchorCircleBarbed };
