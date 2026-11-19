import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LinkDotsNotchedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LinkDotsNotched: ForwardRefExoticComponent<LinkDotsNotchedProps & RefAttributes<Svg>>;

export default LinkDotsNotched;
export { LinkDotsNotched };
