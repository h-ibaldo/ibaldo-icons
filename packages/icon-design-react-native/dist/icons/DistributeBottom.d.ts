import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface DistributeBottomProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const DistributeBottom: ForwardRefExoticComponent<DistributeBottomProps & RefAttributes<Svg>>;

export default DistributeBottom;
export { DistributeBottom };
