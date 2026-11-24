import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LinkMenuNotchedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LinkMenuNotched: ForwardRefExoticComponent<LinkMenuNotchedProps & RefAttributes<Svg>>;

export default LinkMenuNotched;
export { LinkMenuNotched };
