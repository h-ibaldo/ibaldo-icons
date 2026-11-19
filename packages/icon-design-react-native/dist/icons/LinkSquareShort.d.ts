import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LinkSquareShortProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LinkSquareShort: ForwardRefExoticComponent<LinkSquareShortProps & RefAttributes<Svg>>;

export default LinkSquareShort;
export { LinkSquareShort };
