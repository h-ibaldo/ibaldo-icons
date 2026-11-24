import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LinkSquareOpenProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LinkSquareOpen: ForwardRefExoticComponent<LinkSquareOpenProps & RefAttributes<Svg>>;

export default LinkSquareOpen;
export { LinkSquareOpen };
