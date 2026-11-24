import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface HandMoveProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const HandMove: ForwardRefExoticComponent<HandMoveProps & RefAttributes<SVGSVGElement>>;

export default HandMove;
export { HandMove };
