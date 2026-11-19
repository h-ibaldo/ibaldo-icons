import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LinkArrowUpWideProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LinkArrowUpWide: ForwardRefExoticComponent<LinkArrowUpWideProps & RefAttributes<Svg>>;

export default LinkArrowUpWide;
export { LinkArrowUpWide };
