import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface EjectDownCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const EjectDownCircle: ForwardRefExoticComponent<EjectDownCircleProps & RefAttributes<Svg>>;

export default EjectDownCircle;
export { EjectDownCircle };
