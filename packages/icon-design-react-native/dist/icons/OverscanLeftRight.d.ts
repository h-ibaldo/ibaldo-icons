import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface OverscanLeftRightProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const OverscanLeftRight: ForwardRefExoticComponent<OverscanLeftRightProps & RefAttributes<Svg>>;

export default OverscanLeftRight;
export { OverscanLeftRight };
