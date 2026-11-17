import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CubeFocusProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CubeFocus: ForwardRefExoticComponent<CubeFocusProps & RefAttributes<SVGSVGElement>>;

export default CubeFocus;
export { CubeFocus };
