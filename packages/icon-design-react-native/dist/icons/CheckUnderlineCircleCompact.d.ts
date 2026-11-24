import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CheckUnderlineCircleCompactProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CheckUnderlineCircleCompact: ForwardRefExoticComponent<CheckUnderlineCircleCompactProps & RefAttributes<Svg>>;

export default CheckUnderlineCircleCompact;
export { CheckUnderlineCircleCompact };
