import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LinkCircleXWideProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LinkCircleXWide: ForwardRefExoticComponent<LinkCircleXWideProps & RefAttributes<Svg>>;

export default LinkCircleXWide;
export { LinkCircleXWide };
