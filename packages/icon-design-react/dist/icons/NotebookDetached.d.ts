import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface NotebookDetachedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const NotebookDetached: ForwardRefExoticComponent<NotebookDetachedProps & RefAttributes<SVGSVGElement>>;

export default NotebookDetached;
export { NotebookDetached };
