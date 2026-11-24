import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LinkDotsCircleNotchedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LinkDotsCircleNotched: ForwardRefExoticComponent<LinkDotsCircleNotchedProps & RefAttributes<Svg>>;

export default LinkDotsCircleNotched;
export { LinkDotsCircleNotched };
