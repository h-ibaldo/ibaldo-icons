import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface NotebookInfoProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const NotebookInfo: ForwardRefExoticComponent<NotebookInfoProps & RefAttributes<SVGSVGElement>>;

export default NotebookInfo;
export { NotebookInfo };
