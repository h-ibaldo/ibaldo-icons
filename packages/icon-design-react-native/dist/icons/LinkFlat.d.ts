import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LinkFlatProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LinkFlat: ForwardRefExoticComponent<LinkFlatProps & RefAttributes<Svg>>;

export default LinkFlat;
export { LinkFlat };
