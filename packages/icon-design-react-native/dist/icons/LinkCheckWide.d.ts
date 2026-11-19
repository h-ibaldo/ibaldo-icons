import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LinkCheckWideProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LinkCheckWide: ForwardRefExoticComponent<LinkCheckWideProps & RefAttributes<Svg>>;

export default LinkCheckWide;
export { LinkCheckWide };
