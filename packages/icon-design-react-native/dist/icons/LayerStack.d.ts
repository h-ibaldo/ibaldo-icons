import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LayerStackProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LayerStack: ForwardRefExoticComponent<LayerStackProps & RefAttributes<Svg>>;

export default LayerStack;
export { LayerStack };
