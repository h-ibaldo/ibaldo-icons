import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LayerStackOpenMinusProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LayerStackOpenMinus: ForwardRefExoticComponent<LayerStackOpenMinusProps & RefAttributes<Svg>>;

export default LayerStackOpenMinus;
export { LayerStackOpenMinus };
