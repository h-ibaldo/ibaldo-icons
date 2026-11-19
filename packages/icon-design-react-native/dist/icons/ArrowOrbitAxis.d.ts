import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowOrbitAxisProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowOrbitAxis: ForwardRefExoticComponent<ArrowOrbitAxisProps & RefAttributes<Svg>>;

export default ArrowOrbitAxis;
export { ArrowOrbitAxis };
