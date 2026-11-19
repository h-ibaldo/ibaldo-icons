import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LayerStackRoundedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LayerStackRounded: ForwardRefExoticComponent<LayerStackRoundedProps & RefAttributes<Svg>>;

export default LayerStackRounded;
export { LayerStackRounded };
