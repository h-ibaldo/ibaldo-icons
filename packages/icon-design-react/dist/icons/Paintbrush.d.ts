import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PaintbrushProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Paintbrush: ForwardRefExoticComponent<PaintbrushProps & RefAttributes<SVGSVGElement>>;

export default Paintbrush;
export { Paintbrush };
