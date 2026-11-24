import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LinkCircleWideProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LinkCircleWide: ForwardRefExoticComponent<LinkCircleWideProps & RefAttributes<Svg>>;

export default LinkCircleWide;
export { LinkCircleWide };
