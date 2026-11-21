import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PaperPlaneBareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PaperPlaneBare: ForwardRefExoticComponent<PaperPlaneBareProps & RefAttributes<Svg>>;

export default PaperPlaneBare;
export { PaperPlaneBare };
