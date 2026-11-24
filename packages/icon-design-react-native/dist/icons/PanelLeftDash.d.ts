import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PanelLeftDashProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PanelLeftDash: ForwardRefExoticComponent<PanelLeftDashProps & RefAttributes<Svg>>;

export default PanelLeftDash;
export { PanelLeftDash };
