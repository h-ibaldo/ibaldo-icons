import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PanelLeftProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PanelLeft: ForwardRefExoticComponent<PanelLeftProps & RefAttributes<Svg>>;

export default PanelLeft;
export { PanelLeft };
