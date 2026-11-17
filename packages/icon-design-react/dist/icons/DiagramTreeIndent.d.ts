import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface DiagramTreeIndentProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const DiagramTreeIndent: ForwardRefExoticComponent<DiagramTreeIndentProps & RefAttributes<SVGSVGElement>>;

export default DiagramTreeIndent;
export { DiagramTreeIndent };
