import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LayerStackOpenTwoProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LayerStackOpenTwo: ForwardRefExoticComponent<LayerStackOpenTwoProps & RefAttributes<Svg>>;

export default LayerStackOpenTwo;
export { LayerStackOpenTwo };
