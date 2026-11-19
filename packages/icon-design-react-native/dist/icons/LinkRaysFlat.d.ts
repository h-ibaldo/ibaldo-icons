import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LinkRaysFlatProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LinkRaysFlat: ForwardRefExoticComponent<LinkRaysFlatProps & RefAttributes<Svg>>;

export default LinkRaysFlat;
export { LinkRaysFlat };
