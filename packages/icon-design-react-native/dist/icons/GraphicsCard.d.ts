import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface GraphicsCardProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const GraphicsCard: ForwardRefExoticComponent<GraphicsCardProps & RefAttributes<Svg>>;

export default GraphicsCard;
export { GraphicsCard };
