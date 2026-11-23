import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PilcrowArrowRightProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PilcrowArrowRight: ForwardRefExoticComponent<PilcrowArrowRightProps & RefAttributes<Svg>>;

export default PilcrowArrowRight;
export { PilcrowArrowRight };
