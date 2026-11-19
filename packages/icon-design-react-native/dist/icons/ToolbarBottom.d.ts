import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ToolbarBottomProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ToolbarBottom: ForwardRefExoticComponent<ToolbarBottomProps & RefAttributes<Svg>>;

export default ToolbarBottom;
export { ToolbarBottom };
