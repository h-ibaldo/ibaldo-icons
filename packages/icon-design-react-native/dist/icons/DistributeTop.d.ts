import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface DistributeTopProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const DistributeTop: ForwardRefExoticComponent<DistributeTopProps & RefAttributes<Svg>>;

export default DistributeTop;
export { DistributeTop };
