import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface XUndoWideProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const XUndoWide: ForwardRefExoticComponent<XUndoWideProps & RefAttributes<SVGSVGElement>>;

export default XUndoWide;
export { XUndoWide };
