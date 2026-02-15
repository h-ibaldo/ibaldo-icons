import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface IInformationSquare1Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const IInformationSquare1: ForwardRefExoticComponent<IInformationSquare1Props & RefAttributes<SVGSVGElement>>;

export default IInformationSquare1;
export { IInformationSquare1 };
