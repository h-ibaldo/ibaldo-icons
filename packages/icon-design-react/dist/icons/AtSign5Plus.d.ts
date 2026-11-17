import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AtSign5PlusProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AtSign5Plus: ForwardRefExoticComponent<AtSign5PlusProps & RefAttributes<SVGSVGElement>>;

export default AtSign5Plus;
export { AtSign5Plus };
