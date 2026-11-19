import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface AtRoundedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const AtRounded: ForwardRefExoticComponent<AtRoundedProps & RefAttributes<Svg>>;

export default AtRounded;
export { AtRounded };
