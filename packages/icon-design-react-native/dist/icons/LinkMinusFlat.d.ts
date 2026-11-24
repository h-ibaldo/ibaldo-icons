import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LinkMinusFlatProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LinkMinusFlat: ForwardRefExoticComponent<LinkMinusFlatProps & RefAttributes<Svg>>;

export default LinkMinusFlat;
export { LinkMinusFlat };
