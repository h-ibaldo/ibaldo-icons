import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SunFacetedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SunFaceted: ForwardRefExoticComponent<SunFacetedProps & RefAttributes<Svg>>;

export default SunFaceted;
export { SunFaceted };
