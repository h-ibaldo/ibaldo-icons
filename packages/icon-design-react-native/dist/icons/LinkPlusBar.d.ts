import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LinkPlusBarProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LinkPlusBar: ForwardRefExoticComponent<LinkPlusBarProps & RefAttributes<Svg>>;

export default LinkPlusBar;
export { LinkPlusBar };
