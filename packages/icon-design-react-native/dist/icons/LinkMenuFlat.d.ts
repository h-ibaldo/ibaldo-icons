import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LinkMenuFlatProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LinkMenuFlat: ForwardRefExoticComponent<LinkMenuFlatProps & RefAttributes<Svg>>;

export default LinkMenuFlat;
export { LinkMenuFlat };
