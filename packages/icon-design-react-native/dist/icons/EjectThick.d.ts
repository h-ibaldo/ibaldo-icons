import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface EjectThickProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const EjectThick: ForwardRefExoticComponent<EjectThickProps & RefAttributes<Svg>>;

export default EjectThick;
export { EjectThick };
