import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface NotebookProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const Notebook: ForwardRefExoticComponent<NotebookProps & RefAttributes<Svg>>;

export default Notebook;
export { Notebook };
