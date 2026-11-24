import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LayerStackOpenPlusProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LayerStackOpenPlus: ForwardRefExoticComponent<LayerStackOpenPlusProps & RefAttributes<Svg>>;

export default LayerStackOpenPlus;
export { LayerStackOpenPlus };
