import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface DistributeLeftRightProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const DistributeLeftRight: ForwardRefExoticComponent<DistributeLeftRightProps & RefAttributes<Svg>>;

export default DistributeLeftRight;
export { DistributeLeftRight };
