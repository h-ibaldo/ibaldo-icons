import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LinkBrokenFlatProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LinkBrokenFlat: ForwardRefExoticComponent<LinkBrokenFlatProps & RefAttributes<Svg>>;

export default LinkBrokenFlat;
export { LinkBrokenFlat };
