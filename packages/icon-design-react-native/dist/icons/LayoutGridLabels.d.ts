import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LayoutGridLabelsProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LayoutGridLabels: ForwardRefExoticComponent<LayoutGridLabelsProps & RefAttributes<Svg>>;

export default LayoutGridLabels;
export { LayoutGridLabels };
