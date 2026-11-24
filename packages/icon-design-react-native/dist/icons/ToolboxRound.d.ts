import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ToolboxRoundProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ToolboxRound: ForwardRefExoticComponent<ToolboxRoundProps & RefAttributes<Svg>>;

export default ToolboxRound;
export { ToolboxRound };
