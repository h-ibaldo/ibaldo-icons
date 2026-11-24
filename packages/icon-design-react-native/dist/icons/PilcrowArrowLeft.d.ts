import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PilcrowArrowLeftProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PilcrowArrowLeft: ForwardRefExoticComponent<PilcrowArrowLeftProps & RefAttributes<Svg>>;

export default PilcrowArrowLeft;
export { PilcrowArrowLeft };
