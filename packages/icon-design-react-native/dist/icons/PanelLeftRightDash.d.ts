import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PanelLeftRightDashProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PanelLeftRightDash: ForwardRefExoticComponent<PanelLeftRightDashProps & RefAttributes<Svg>>;

export default PanelLeftRightDash;
export { PanelLeftRightDash };
