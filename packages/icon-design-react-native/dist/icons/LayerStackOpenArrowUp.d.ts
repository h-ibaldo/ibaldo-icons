import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LayerStackOpenArrowUpProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LayerStackOpenArrowUp: ForwardRefExoticComponent<LayerStackOpenArrowUpProps & RefAttributes<Svg>>;

export default LayerStackOpenArrowUp;
export { LayerStackOpenArrowUp };
