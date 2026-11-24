import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BrowserTrashProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BrowserTrash: ForwardRefExoticComponent<BrowserTrashProps & RefAttributes<Svg>>;

export default BrowserTrash;
export { BrowserTrash };
