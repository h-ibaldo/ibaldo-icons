import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LinkMenuWideProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LinkMenuWide: ForwardRefExoticComponent<LinkMenuWideProps & RefAttributes<Svg>>;

export default LinkMenuWide;
export { LinkMenuWide };
