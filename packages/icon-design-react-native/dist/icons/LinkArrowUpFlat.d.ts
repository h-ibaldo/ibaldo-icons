import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LinkArrowUpFlatProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LinkArrowUpFlat: ForwardRefExoticComponent<LinkArrowUpFlatProps & RefAttributes<Svg>>;

export default LinkArrowUpFlat;
export { LinkArrowUpFlat };
