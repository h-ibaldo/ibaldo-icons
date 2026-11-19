import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LinkXFlatProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LinkXFlat: ForwardRefExoticComponent<LinkXFlatProps & RefAttributes<Svg>>;

export default LinkXFlat;
export { LinkXFlat };
