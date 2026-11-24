import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CheckBoldProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CheckBold: ForwardRefExoticComponent<CheckBoldProps & RefAttributes<Svg>>;

export default CheckBold;
export { CheckBold };
