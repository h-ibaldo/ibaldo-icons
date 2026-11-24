import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface GaugeTrio2Props extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const GaugeTrio2: ForwardRefExoticComponent<GaugeTrio2Props & RefAttributes<Svg>>;

export default GaugeTrio2;
export { GaugeTrio2 };
