import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CheckboxCompactProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CheckboxCompact: ForwardRefExoticComponent<CheckboxCompactProps & RefAttributes<Svg>>;

export default CheckboxCompact;
export { CheckboxCompact };
