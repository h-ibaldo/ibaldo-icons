import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface EjectCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const EjectCircle: ForwardRefExoticComponent<EjectCircleProps & RefAttributes<Svg>>;

export default EjectCircle;
export { EjectCircle };
