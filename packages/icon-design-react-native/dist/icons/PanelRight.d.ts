import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PanelRightProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PanelRight: ForwardRefExoticComponent<PanelRightProps & RefAttributes<Svg>>;

export default PanelRight;
export { PanelRight };
