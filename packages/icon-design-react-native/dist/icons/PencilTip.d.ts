import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PencilTipProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PencilTip: ForwardRefExoticComponent<PencilTipProps & RefAttributes<Svg>>;

export default PencilTip;
export { PencilTip };
