import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PanelRightDashProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PanelRightDash: ForwardRefExoticComponent<PanelRightDashProps & RefAttributes<Svg>>;

export default PanelRightDash;
export { PanelRightDash };
