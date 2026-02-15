import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface IInformation4Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const IInformation4: ForwardRefExoticComponent<IInformation4Props & RefAttributes<SVGSVGElement>>;

export default IInformation4;
export { IInformation4 };
