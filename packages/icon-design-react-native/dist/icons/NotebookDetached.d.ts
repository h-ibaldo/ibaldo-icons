import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface NotebookDetachedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const NotebookDetached: ForwardRefExoticComponent<NotebookDetachedProps & RefAttributes<Svg>>;

export default NotebookDetached;
export { NotebookDetached };
