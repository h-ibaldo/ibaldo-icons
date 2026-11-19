import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ToolboxProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const Toolbox: ForwardRefExoticComponent<ToolboxProps & RefAttributes<Svg>>;

export default Toolbox;
export { Toolbox };
