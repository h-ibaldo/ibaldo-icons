import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LinkXCircleNotchedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LinkXCircleNotched: ForwardRefExoticComponent<LinkXCircleNotchedProps & RefAttributes<Svg>>;

export default LinkXCircleNotched;
export { LinkXCircleNotched };
