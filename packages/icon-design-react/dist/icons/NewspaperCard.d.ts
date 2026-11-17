import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface NewspaperCardProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const NewspaperCard: ForwardRefExoticComponent<NewspaperCardProps & RefAttributes<SVGSVGElement>>;

export default NewspaperCard;
export { NewspaperCard };
