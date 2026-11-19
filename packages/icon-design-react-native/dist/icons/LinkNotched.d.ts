import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LinkNotchedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LinkNotched: ForwardRefExoticComponent<LinkNotchedProps & RefAttributes<Svg>>;

export default LinkNotched;
export { LinkNotched };
