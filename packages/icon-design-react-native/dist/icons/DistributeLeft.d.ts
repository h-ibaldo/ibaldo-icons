import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface DistributeLeftProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const DistributeLeft: ForwardRefExoticComponent<DistributeLeftProps & RefAttributes<Svg>>;

export default DistributeLeft;
export { DistributeLeft };
