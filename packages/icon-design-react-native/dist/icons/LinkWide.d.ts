import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LinkWideProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LinkWide: ForwardRefExoticComponent<LinkWideProps & RefAttributes<Svg>>;

export default LinkWide;
export { LinkWide };
