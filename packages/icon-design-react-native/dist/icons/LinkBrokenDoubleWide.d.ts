import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LinkBrokenDoubleWideProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LinkBrokenDoubleWide: ForwardRefExoticComponent<LinkBrokenDoubleWideProps & RefAttributes<Svg>>;

export default LinkBrokenDoubleWide;
export { LinkBrokenDoubleWide };
