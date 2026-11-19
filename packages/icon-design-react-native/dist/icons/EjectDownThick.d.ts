import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface EjectDownThickProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const EjectDownThick: ForwardRefExoticComponent<EjectDownThickProps & RefAttributes<Svg>>;

export default EjectDownThick;
export { EjectDownThick };
