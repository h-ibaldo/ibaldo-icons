import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LinkCheckProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LinkCheck: ForwardRefExoticComponent<LinkCheckProps & RefAttributes<Svg>>;

export default LinkCheck;
export { LinkCheck };
