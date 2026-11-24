import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LayerStackTwoProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LayerStackTwo: ForwardRefExoticComponent<LayerStackTwoProps & RefAttributes<Svg>>;

export default LayerStackTwo;
export { LayerStackTwo };
