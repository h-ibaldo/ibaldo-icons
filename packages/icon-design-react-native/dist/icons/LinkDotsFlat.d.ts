import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LinkDotsFlatProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LinkDotsFlat: ForwardRefExoticComponent<LinkDotsFlatProps & RefAttributes<Svg>>;

export default LinkDotsFlat;
export { LinkDotsFlat };
