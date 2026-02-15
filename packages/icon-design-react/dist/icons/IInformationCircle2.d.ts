import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface IInformationCircle2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const IInformationCircle2: ForwardRefExoticComponent<IInformationCircle2Props & RefAttributes<SVGSVGElement>>;

export default IInformationCircle2;
export { IInformationCircle2 };
