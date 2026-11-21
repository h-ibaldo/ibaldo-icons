import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface NotApproximateProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const NotApproximate: ForwardRefExoticComponent<NotApproximateProps & RefAttributes<Svg>>;

export default NotApproximate;
export { NotApproximate };
