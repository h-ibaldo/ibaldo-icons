import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LinkCircleCheckWideProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LinkCircleCheckWide: ForwardRefExoticComponent<LinkCircleCheckWideProps & RefAttributes<Svg>>;

export default LinkCircleCheckWide;
export { LinkCircleCheckWide };
