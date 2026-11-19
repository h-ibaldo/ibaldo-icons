import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LinkOffCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LinkOffCircle: ForwardRefExoticComponent<LinkOffCircleProps & RefAttributes<Svg>>;

export default LinkOffCircle;
export { LinkOffCircle };
