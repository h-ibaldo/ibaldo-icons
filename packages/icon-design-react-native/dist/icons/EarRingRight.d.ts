import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface EarRingRightProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const EarRingRight: ForwardRefExoticComponent<EarRingRightProps & RefAttributes<Svg>>;

export default EarRingRight;
export { EarRingRight };
