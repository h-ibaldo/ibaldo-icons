import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LinkSplitSquareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LinkSplitSquare: ForwardRefExoticComponent<LinkSplitSquareProps & RefAttributes<SVGSVGElement>>;

export default LinkSplitSquare;
export { LinkSplitSquare };
