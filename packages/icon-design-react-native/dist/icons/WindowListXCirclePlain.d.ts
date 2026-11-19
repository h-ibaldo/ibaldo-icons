import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WindowListXCirclePlainProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const WindowListXCirclePlain: ForwardRefExoticComponent<WindowListXCirclePlainProps & RefAttributes<Svg>>;

export default WindowListXCirclePlain;
export { WindowListXCirclePlain };
