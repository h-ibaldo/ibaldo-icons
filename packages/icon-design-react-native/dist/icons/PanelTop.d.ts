import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PanelTopProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PanelTop: ForwardRefExoticComponent<PanelTopProps & RefAttributes<Svg>>;

export default PanelTop;
export { PanelTop };
