import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LinkDotsWideProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LinkDotsWide: ForwardRefExoticComponent<LinkDotsWideProps & RefAttributes<Svg>>;

export default LinkDotsWide;
export { LinkDotsWide };
