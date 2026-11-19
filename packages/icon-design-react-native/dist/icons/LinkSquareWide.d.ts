import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LinkSquareWideProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LinkSquareWide: ForwardRefExoticComponent<LinkSquareWideProps & RefAttributes<Svg>>;

export default LinkSquareWide;
export { LinkSquareWide };
