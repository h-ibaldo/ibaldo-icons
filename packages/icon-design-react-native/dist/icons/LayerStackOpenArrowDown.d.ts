import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LayerStackOpenArrowDownProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LayerStackOpenArrowDown: ForwardRefExoticComponent<LayerStackOpenArrowDownProps & RefAttributes<Svg>>;

export default LayerStackOpenArrowDown;
export { LayerStackOpenArrowDown };
