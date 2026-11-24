import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface DistributeRightProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const DistributeRight: ForwardRefExoticComponent<DistributeRightProps & RefAttributes<Svg>>;

export default DistributeRight;
export { DistributeRight };
