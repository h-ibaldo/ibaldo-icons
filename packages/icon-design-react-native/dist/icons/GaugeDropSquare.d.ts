import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface GaugeDropSquareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const GaugeDropSquare: ForwardRefExoticComponent<GaugeDropSquareProps & RefAttributes<Svg>>;

export default GaugeDropSquare;
export { GaugeDropSquare };
