import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface NotebookBinderProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const NotebookBinder: ForwardRefExoticComponent<NotebookBinderProps & RefAttributes<SVGSVGElement>>;

export default NotebookBinder;
export { NotebookBinder };
