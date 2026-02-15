import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface IInformationSquare2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const IInformationSquare2: ForwardRefExoticComponent<IInformationSquare2Props & RefAttributes<SVGSVGElement>>;

export default IInformationSquare2;
export { IInformationSquare2 };
