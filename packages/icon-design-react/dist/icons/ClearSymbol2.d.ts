import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ClearSymbol2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ClearSymbol2: ForwardRefExoticComponent<ClearSymbol2Props & RefAttributes<SVGSVGElement>>;

export default ClearSymbol2;
export { ClearSymbol2 };
