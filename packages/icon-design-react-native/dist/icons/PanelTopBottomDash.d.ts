import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PanelTopBottomDashProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PanelTopBottomDash: ForwardRefExoticComponent<PanelTopBottomDashProps & RefAttributes<Svg>>;

export default PanelTopBottomDash;
export { PanelTopBottomDash };
