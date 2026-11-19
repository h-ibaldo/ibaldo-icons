import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CloudProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const Cloud: ForwardRefExoticComponent<CloudProps & RefAttributes<Svg>>;

export default Cloud;
export { Cloud };
