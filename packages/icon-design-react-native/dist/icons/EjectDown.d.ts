import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface EjectDownProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const EjectDown: ForwardRefExoticComponent<EjectDownProps & RefAttributes<Svg>>;

export default EjectDown;
export { EjectDown };
