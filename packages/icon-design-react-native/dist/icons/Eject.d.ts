import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface EjectProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const Eject: ForwardRefExoticComponent<EjectProps & RefAttributes<Svg>>;

export default Eject;
export { Eject };
