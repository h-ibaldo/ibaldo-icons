import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface GaugeDashedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const GaugeDashed: ForwardRefExoticComponent<GaugeDashedProps & RefAttributes<Svg>>;

export default GaugeDashed;
export { GaugeDashed };
