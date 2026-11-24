import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PanelTopDashProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PanelTopDash: ForwardRefExoticComponent<PanelTopDashProps & RefAttributes<Svg>>;

export default PanelTopDash;
export { PanelTopDash };
