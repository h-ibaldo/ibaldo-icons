import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LinkMinusWideProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LinkMinusWide: ForwardRefExoticComponent<LinkMinusWideProps & RefAttributes<Svg>>;

export default LinkMinusWide;
export { LinkMinusWide };
