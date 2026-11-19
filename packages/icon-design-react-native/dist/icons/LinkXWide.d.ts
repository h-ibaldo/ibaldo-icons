import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LinkXWideProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LinkXWide: ForwardRefExoticComponent<LinkXWideProps & RefAttributes<Svg>>;

export default LinkXWide;
export { LinkXWide };
