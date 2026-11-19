import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LinkArrowUpBar2Props extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LinkArrowUpBar2: ForwardRefExoticComponent<LinkArrowUpBar2Props & RefAttributes<Svg>>;

export default LinkArrowUpBar2;
export { LinkArrowUpBar2 };
