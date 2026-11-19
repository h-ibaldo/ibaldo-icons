import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ToolboxAngledProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ToolboxAngled: ForwardRefExoticComponent<ToolboxAngledProps & RefAttributes<Svg>>;

export default ToolboxAngled;
export { ToolboxAngled };
