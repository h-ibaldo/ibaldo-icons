import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PanelBottomDashProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PanelBottomDash: ForwardRefExoticComponent<PanelBottomDashProps & RefAttributes<Svg>>;

export default PanelBottomDash;
export { PanelBottomDash };
