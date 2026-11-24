import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface NotebookBinderProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const NotebookBinder: ForwardRefExoticComponent<NotebookBinderProps & RefAttributes<Svg>>;

export default NotebookBinder;
export { NotebookBinder };
