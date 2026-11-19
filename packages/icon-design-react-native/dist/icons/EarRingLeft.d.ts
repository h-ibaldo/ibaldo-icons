import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface EarRingLeftProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const EarRingLeft: ForwardRefExoticComponent<EarRingLeftProps & RefAttributes<Svg>>;

export default EarRingLeft;
export { EarRingLeft };
