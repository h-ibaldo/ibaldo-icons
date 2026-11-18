import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PresentationBoardProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PresentationBoard: ForwardRefExoticComponent<PresentationBoardProps & RefAttributes<SVGSVGElement>>;

export default PresentationBoard;
export { PresentationBoard };
