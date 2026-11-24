import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LinkPlusCircleNotchedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LinkPlusCircleNotched: ForwardRefExoticComponent<LinkPlusCircleNotchedProps & RefAttributes<Svg>>;

export default LinkPlusCircleNotched;
export { LinkPlusCircleNotched };
