import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PanelBottomProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PanelBottom: ForwardRefExoticComponent<PanelBottomProps & RefAttributes<Svg>>;

export default PanelBottom;
export { PanelBottom };
