import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LayoutPanelLeftProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LayoutPanelLeft: ForwardRefExoticComponent<LayoutPanelLeftProps & RefAttributes<Svg>>;

export default LayoutPanelLeft;
export { LayoutPanelLeft };
